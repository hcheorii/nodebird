const express = require("express");
const { Post, User, Image, Comment } = require("../models");
const router = express.Router();

router.get("/", async (req, res, next) => {
    //게시글 여러개 가져오는 것
    try {
        const posts = await Post.findAll({
            limit: 10,
            order: [
                ["createdAt", "DESC"],
                [Comment, "createdAt", "DESC"], //댓글의 내림차순 정렬
            ],
            include: [
                {
                    model: User,
                    attributes: ["id", "nickname"],
                },
                {
                    model: Image,
                },
                {
                    model: Comment,
                    include: [
                        {
                            model: User,
                            attributes: ["id", "nickname"],
                        },
                    ],
                },
            ],
        });
        console.log(posts);
        res.status(200).json(posts);
    } catch (err) {
        console.error(err);
        next(err);
    }
});

module.exports = router;
