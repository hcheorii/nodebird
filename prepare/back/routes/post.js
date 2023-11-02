const express = require("express");

const router = express.Router();
const { Post } = require("../models");
const { isLoggedIn, isNotLoggedIn } = require("./middlewares");

router.post("/", isLoggedIn, async (req, res, next) => {
    // 보기에는 "/"로 되어있지만 실제로는 "/post"로 되어있다.
    try {
        const post = await Post.create({
            content: req.body.content,
            UserId: req.user.id,
        });
        res.status(201).json(post); //다시 프론트로 돌려주기
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
            return req.status(403).send("존재하지 않는 게시글입니다.");
        }
        const comment = await Comment.create({
            content: req.body.content,
            postId: req.params.postId,
            UserId: req.user.id,
        });
        req.status(201).json(comment);
    } catch (error) {
        console.error(error);
        next(error);
    }
});

router.delete("/", (req, res) => {
    res.json({ id: 1 });
});
module.exports = router;
//node에서는 import와 export defau lt를 사용하지 않고 require를 사용한다.
