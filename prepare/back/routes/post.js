const express = require("express");

const router = express.Router();
const { Post } = require("../models");

router.post("/", async (req, res, next) => {
    // 보기에는 "/"로 되어있지만 실제로는 "/post"로 되어있다.
    try {
        const post = await Post.create({
            content: req.body.content,
        });
        res.status(201).json(post);
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
