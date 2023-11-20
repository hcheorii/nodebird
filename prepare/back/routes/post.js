const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const { Post, Image, Comment, User, Hashtag } = require("../models");
const { isLoggedIn } = require("./middlewares");

const router = express.Router();

try {
    fs.accessSync("uploads");
} catch (error) {
    console.log("uploads폴더가 없으므로 생성합니다.");
    fs.mkdirSync("uploads");
}

const upload = multer({
    storage: multer.diskStorage({
        //어디에 저장할지 diskStorage => 하드디스크에 저장
        destination(req, file, done) {
            done(null, "uploads");
        },
        filename(req, file, done) {
            // 제로초.png
            const ext = path.extname(file.originalname); // 확장자 추출(.png)
            const basename = path.basename(file.originalname, ext); // 제로초
            done(null, basename + "_" + new Date().getTime() + ext); // 제로초15184712891.png
        },
    }),
    limits: { fileSize: 20 * 1024 * 1024 }, // 20MB
});

router.post("/", isLoggedIn, upload.none(), async (req, res, next) => {
    // 보기에는 "/"로 되어있지만 실제로는 "/post"로 되어있다.
    try {
        const hashtags = req.body.content.match(/#[^\s#]+/g); //hashtag 정규식
        const post = await Post.create({
            content: req.body.content,
            UserId: req.user.id,
        });
        if (hashtags) {
            const result = await Promise.all(
                hashtags.map(
                    (tag) =>
                        Hashtag.findOrCreate({
                            //있으면 가져오고 없으면 추가해라
                            where: { name: tag.slice(1).toLowerCase() },
                        }) //[[노드, true], [리액트, true]] 이런식으로 나옴
                    //slice는 글자만 떼기 위해 ex ) #react인 경우 react만 꺼냄
                )
            );
            await post.addHashtags(result.map((v) => v[0])); //위에 같은 형식이기 때문에 0번째만 꺼내야함
        }
        if (req.body.image) {
            if (Array.isArray(req.body.image)) {
                //여러개의 이미지를 올린 경우
                const images = await Promise.all(
                    req.body.image.map((image) => Image.create({ src: image }))
                );
                await post.addImages(images);
            } else {
                const image = await Image.create({ src: req.body.image });
                await post.addImages(image);
            }
        }
        const fullPost = await Post.findOne({
            where: { id: post.id },
            include: [
                {
                    model: Image,
                },
                {
                    model: Comment,
                    include: [
                        {
                            model: User, //댓글 작성자
                            attributes: ["id", "nickname"],
                        },
                    ],
                },
                {
                    model: User, //게시글 작성자
                    attributes: ["id", "nickname"],
                },
                {
                    model: User, //좋아요 누른 사람
                    as: "Likers",
                    attributes: ["id"],
                },
            ],
        });
        res.status(201).json(fullPost); //다시 프론트로 돌려주기
    } catch (error) {
        console.error(error);
        next(error);
    }
});

router.post("/:postId/comment", isLoggedIn, async (req, res, next) => {
    //:postId는 동적으로 바뀐다.
    //POST /post/comment
    // 보기에는 "/"로 되어있지만 실제로는 "/post"로 되어있다.
    try {
        const post = await Post.findOne({
            //이 게시물이 진짜 있는지.
            where: { id: req.params.postId },
        });
        if (!post) {
            return res.status(403).send("존재하지 않는 게시글입니다.");
        }
        const comment = await Comment.create({
            content: req.body.content,
            PostId: parseInt(req.params.postId, 10), //문자열로 넘어가기 때문에 int형으로 바꿔줘야한다.
            UserId: req.user.id,
        });
        const fullComment = await Comment.findOne({
            where: { id: comment.id },
            include: [
                {
                    model: User,
                    attributes: ["id", "nickname"],
                },
            ],
        });
        res.status(201).json(fullComment);
    } catch (error) {
        console.error(error);
        next(error);
    }
});

router.patch("/:postId/like", isLoggedIn, async (req, res, next) => {
    //PATCH /post/1/like\
    try {
        const post = await Post.findOne({ where: { id: req.params.postId } });
        if (!post) {
            return res.status(403).send("게시글이 존재하지 않습니다.");
        }
        await post.addLikers(req.user.id);
        res.json({ PostId: post.id, UserId: req.user.id });
    } catch (error) {
        console.error(error);
        next(error);
    }
});

router.delete("/:postId/like", isLoggedIn, async (req, res, next) => {
    //DELETE /post/1/like
    try {
        const post = await Post.findOne({ where: { id: req.params.postId } });
        if (!post) {
            return res.status(403).send("게시글이 존재하지 않습니다.");
        }
        await post.removeLikers(req.user.id);
        res.json({ PostId: post.id, UserId: req.user.id });
    } catch (error) {
        console.error(error);
        next(error);
    }
});

router.delete("/:postId", isLoggedIn, async (req, res, next) => {
    // DELETE /post/10
    try {
        await Post.destroy({
            where: {
                id: req.params.postId,
                UserId: req.user.id,
            },
        });
        res.status(200).json({ PostId: parseInt(req.params.postId, 10) });
    } catch (error) {
        console.error(error);
        next(error);
    }
});

router.post(
    "/images",
    isLoggedIn,
    upload.array("image"), //PostForm.js에서input에 올린 이미지가 배열로 들어감 (이미지를 여러장 올릴 수 있게 하기 위해서)
    async (req, res, next) => {
        // POST /post/images/
        //이곳은 이미지 업로드 후 실행되는 부분, 업로드는 위에 upload에서 이미 다 올라감
        console.log(req.files);
        res.json(req.files.map((v) => v.filename)); //프론트로 보내줌
    }
);

router.post("/:postId/retweet", isLoggedIn, async (req, res, next) => {
    //:postId는 동적으로 바뀐다.
    //POST /post/comment
    // 보기에는 "/"로 되어있지만 실제로는 "/post"로 되어있다.
    try {
        const post = await Post.findOne({
            //이 게시물이 진짜 있는지.
            where: { id: req.params.postId },
            include: [
                {
                    model: Post,
                    as: "Retweet",
                },
            ],
        });
        if (!post) {
            return res.status(403).send("존재하지 않는 게시글입니다.");
        }
        if (
            req.user.id === post.UserId ||
            (post.Retweet && post.Retweet.UserI === req.user.id)
        ) {
            //자기 게시글 리트윗 한거, 자기 게시글을 리트윗한걸 다시 리트윗하는거는 막겠다.
            return res.status(403).send("자신의 글은 리트윗할 수 없습니다.");
        }
        const retweetTargetId = post.RetweetId || post.id; //남의글을 리트윗한 남의글은 가능.
        res.status(201).json(fullComment);
    } catch (error) {
        console.error(error);
        next(error);
    }
});

module.exports = router;
//node에서는 import와 export defau lt를 사용하지 않고 require를 사용한다.
