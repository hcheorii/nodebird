const express = require("express");
const { User, Post } = require("../models");
const router = express.Router();
const bcrypt = require("bcrypt");
const passport = require("passport");
const { isLoggedIn, isNotLoggedIn } = require("./middlewares");

router.get("/", async (req, res, next) => {
    // GET /user
    try {
        if (req.user) {
            const fullUserWithoutPassword = await User.findOne({
                where: { id: req.user.id },
                attributes: {
                    exclude: ["password"],
                },
                include: [
                    {
                        model: Post,
                        attributes: ["id"],
                        //내용이나 모든 정보를 가져오면 데이터가 너무 크므로 id만 가져오기
                    },
                    {
                        model: User,
                        as: "Followings",
                        attributes: ["id"],
                    },
                    {
                        model: User,
                        as: "Followers",
                        attributes: ["id"],
                    },
                ],
            });
            res.status(200).json(fullUserWithoutPassword);
        } else {
            res.status(200).json(null);
        }
    } catch (error) {
        console.error(error);
        next(error);
    }
});

router.post("/login", isNotLoggedIn, (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
        if (err) {
            console.error(err);
            return next(err);
        }
        if (info) {
            //client에러
            return res.status(401).send(info.reason); //허가되지 않음.
        }

        return req.login(user, async (loginErr) => {
            if (loginErr) {
                console.error(loginErr);
                return next(loginErr);
            }
            const fullUserWithoutPassword = await User.findOne({
                where: { id: user.id }, //모든 정보들을 다 넣은 유저l
                attribute: {
                    exclude: ["password"], //비밀번호는 가져오지마라
                },
                include: [
                    {
                        model: Post,
                        attributes: ["id"],
                    },
                    {
                        model: User,
                        as: "Followings",
                        attributes: ["id"],
                    },
                    {
                        model: User,
                        as: "Followers",
                        attributes: ["id"],
                    }, //로그인 오류 해결
                ],
            });
            return res.status(200).json(fullUserWithoutPassword);
        });
    })(req, res, next);
});
//passport/local에 done에서 넘겨주는 것들을 ERR, user, info에 받아온다.
//전략 실행
router.post("/", isNotLoggedIn, async (req, res, next) => {
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

router.post("/logout", isLoggedIn, async (req, res, next) => {
    req.logout((err) => {
        req.session.destroy();
        if (err) {
            res.redirect("/");
        } else {
            res.status(200).send("server ok: 로그아웃 완료");
        }
    });
});
module.exports = router;
