const express = require("express");
const fs = require("fs");
const router = express.Router();
const { Post, Image, Comment, User } = require("../models");
const { isLoggedIn, isNotLoggedIn } = require("./middlewares");
const multer = require("multer");
const path = require("path");

try {
    fs.accessSync("uploads");
} catch (error) {
    console.log("uploads폴더가 없으므로 생성합니다.");
    fs.mkdirSync("uploads");
}

router.post("/", isLoggedIn, async (req, res, next) => {
    // 보기에는 "/"로 되어있지만 실제로는 "/post"로 되어있다.
    try {
        const post = await Post.create({
            content: req.body.content,
            UserId: req.user.id,
        });
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

const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, done) {
            done(null, "uploads"); //uploads라는 폴더에 저장할것.
        },
        filename(req, file, done) {
            //제로초.png
            const ext = path.extname(file.originalname); //확장자 추출 (.png)
            const basename = path.basename(file.originalname, ext); //제로초

            done(null, basename + new Date().getTime() + ext); //파일 이름 겹치지 않게 이름 뒤에 시간 초 붙혀줌
        },
    }),
    limits: {
        fileSize: 20 * 1024 * 1024, //20MB
    },
});
router.post(
    "/images",
    isLoggedIn,
    upload.array("image"), //PostForm.js에서input에 올린 이미지가 배열로 들어감 (이미지를 여러장 올릴 수 있게 하기 위해서)
    (req, res, next) => {
        // POST /post/images/
        //이곳은 이미지 업로드 후 실행되는 부분, 업로드는 위에 upload에서 이미 다 올라감
        console.log(req.files);
        res.json(req.files.map((v) => v.filename)); //프론트로 보내줌
    }
);
module.exports = router;
//node에서는 import와 export defau lt를 사용하지 않고 require를 사용한다.
