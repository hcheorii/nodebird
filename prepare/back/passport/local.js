const passport = require("passport");
const bcrypt = require("bcrypt");
const { Strategy: LocalStrategy } = require("passport-local");
const { User } = require("../models");
module.exports = () => {
    passport.use(
        new LocalStrategy(
            {
                usernameField: "email", //req.body.email이기 때문에 EMAil로 해준다
                passwordField: "password",
            },
            async (email, password, done) => {
                try {
                    //전략 채우는 칸
                    const user = await User.findOne({
                        where: { email },
                    });
                    if (!user) {
                        //res.status(403)이 아닌 done을 일단 넘겨준다.
                        return done(null, false, {
                            reason: "존재하지 않는 사용자입니다.",
                        });
                        //첫번째 자리 서버에러, 두번째 자리 성공, 세번째 자리 클라이언트 에러
                    }
                    const result = await bcrypt.compare(
                        password,
                        user.password
                    ); //비밀번호 비교
                    if (result) {
                        return done(null, user); //성공하면 사용자 정보 넘겨주기
                    }
                    return done(null, false, {
                        reason: "비밀번호가 틀렸습니다.",
                    }); //비밀번호가 아닐때
                } catch (error) {
                    console.error(error); //서버에러난 경우
                    return done(error);
                }
            }
        )
    );
};
