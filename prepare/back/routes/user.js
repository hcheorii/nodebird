const express = require("express");
const { User } = require("../models");
const router = express.Router();
const bcrypt = require("bcrypt");

router.post("/", async (req, res, next) => {
    try {
        const exUser = await User.findOne({
            where: {
                email: req.body.email,
            },
        });
        if (exUser) {
            return res.status(403).send("이미 사용중인 아이디입니다.");
        }
        const hashedPassword = await bcrypt.hash(req.body.password, 13); //비밀번호 암호화
        await User.create({
            //순서를 맞춰주기 위한 Await
            email: req.body.email, //req.body는 signup페이지에서 넘겨준 action.data에 들어있다.
            nickname: req.body.nickname,
            password: hashedPassword, //비밀번호 암호화
        });

        res.status(201).send("ok");
    } catch (error) {
        console.error(error);
        next(error);
    }
});
module.exports = router;
