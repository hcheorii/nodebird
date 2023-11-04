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
            //유저가 없을때
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

router.patch("/nickname", isLoggedIn, async (req, res, next) => {
    try {
        await User.update(
            {
                nickname: req.body.nickname,
            },
            {
                where: { id: req.user.id },
            }
        );
        res.status(200).json({ nickname: req.body.nickname });
    } catch (error) {
        console.error(error);
        next(error);
    }
});

router.patch("/:userId/follow", isLoggedIn, async (req, res, next) => {
    //PATCH /user/1/follwow (팔로우 하기)
    try {
        const user = await User.findOne({
            where: { id: req.params.userId },
        });
        if (!user) {
            //팔로우하려는 유저가 없는 유저라면?
            res.status(403).send("없는 사람을 팔로우하려고 하시네요");
        }
        await user.addFollowers(req.user.id);
        res.status(200).json({ UserId: parseInt(req.params.userId, 10) });
    } catch (error) {
        console.error(error);
        next(error);
    }
});

router.delete("/:userId/follow", isLoggedIn, async (req, res, next) => {
    //DELETE /user/1/follwow (팔로우 취소)
    try {
        const user = await User.findOne({
            where: { id: req.params.userId },
        });
        if (!user) {
            //팔로우 취소하려는 유저가 없는 유저라면?
            res.status(403).send("없는 사람을 언팔로우하려고 하시네요");
        }
        await user.removeFollowers(req.user.id);
        res.status(200).json({ UserId: parseInt(req.params.userId, 10) });
    } catch (error) {
        console.error(error);
        next(error);
    }
});
module.exports = router;
