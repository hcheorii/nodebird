const express = require("express");

const router = express.Router();
const { Post, Image, Comment, User } = require("../models");
const user = require("../models/user");
const { isLoggedIn, isNotLoggedIn } = require("./middlewares");

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
            PostId: parseInt(req.params.postId), //문자열로 넘어가기 때문에 int형으로 바꿔줘야한다.
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
module.exports = router;
//node에서는 import와 export defau lt를 사용하지 않고 require를 사용한다.
