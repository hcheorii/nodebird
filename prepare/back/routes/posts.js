const express = require("express");
const { Post, User, Image, Comment } = require("../models");
const router = express.Router();
const { Op } = require("sequelize");

router.get("/", async (req, res, next) => {
    //게시글 여러개 가져오는 것
    try {
        const where = {};
        if (parseInt(req.query.lastId, 10)) {
            //초기 로딩이 아닐때
            where.id = { [Op.lt]: parseInt(req.query.lastId, 10) }; //lastId보다 작은 10개
        }
        const posts = await Post.findAll({
            where,
            limit: 10,
            order: [
                ["createdAt", "DESC"],
                [Comment, "createdAt", "DESC"], //댓글의 내림차순 정렬
            ],
            include: [
                {
                    model: Post,
                    as: "Retweet",
                    include: [
                        {
                            model: User,
                            attributes: ["id", "nickname"],
                        },
                        {
                            model: Image,
                        },
                    ],
                },
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
                {
                    model: User, //좋아요 누른 사람
                    attributes: ["id"],
                    as: "Likers",
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
