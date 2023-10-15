const passport = require("passport");
const local = require("./local");
const { User } = require("../models");
module.exports = () => {
    passport.serializeUser((user, done) => {
        done(null, user.id);
        //다 들고있기는 무거우니까 user.id만 들고있기
        //유저 정보중에서 우리가 쿠키랑 묶어줄 아이디만 저장하는 것.
    }); //req.login에 있는 유저가 여기로 들어오게 된다.

    passport.deserializeUser(async (id, done) => {
        //id를 통해서 디비에서 가져온다.
        try {
            const user = await User.findOne({ where: { id } });
            done(null, user);
        } catch (error) {
            console.error(error);
            done(error);
        }
    });

    local();
};
