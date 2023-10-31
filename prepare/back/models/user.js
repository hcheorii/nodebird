//model은 mysql의 테이블과 같은 개념이다.

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
        //여기서 User는 모델이름 => 자동으로 소문자화되고 복수형이 된다. ex)users

        "User",
        {
            //id는 mysql에서 자동으로 넣어주기 때문에 필요없다.
            //엑셀을 작성한다고 생각
            //사용자 정보는 이메일, 닉네임, 비밀번호로 구성
            email: {
                type: DataTypes.STRING(30),
                //STRIN, INTEGER, BOOLEAN, FLOAT, DATATIME 등이 자주 사용된다.
                //이메일은 문자열이고 30글자 이내여야한다.
                allowNull: false, //false면 필수 -> 무조건 입력해야함.
                unique: true, //이메일은 고유한 값이어야함. 중복값이 있으면 안된다.
            },
            nickname: {
                type: DataTypes.STRING(30),
                allowNull: false, //false면 필수 -> 무조건 입력해야함.
            },
            password: {
                type: DataTypes.STRING(100),
                //비밀번호는 암호화를 하게되면 길이가 늘어나기 때문에 여유있게 100글자
                allowNull: false, //false면 필수 -> 무조건 입력해야함.
            },
        },
        {
            charset: "utf8",
            collate: "utf8_general_ci", //한글 저장
        }
    );
    User.associate = (db) => {
        db.User.hasMany(db.Post); //한 사람이 포스트를 여러개 가질 수 있음
        db.User.hasMany(db.Comment); //한 사람이 댓글 여러개 가질 수 있음
        db.User.belongsToMany(db.Post, { through: "Like", as: "Liked" });
        //게시글 좋아요와 유저는 다대다 관계, 중간 테이블으 이름은 Like

        db.User.belongsToMany(db.User, {
            through: "Follow",
            as: "Followers",
            foreignKey: "FollowingId",
        });
        db.User.belongsToMany(db.User, {
            through: "Follow",
            as: "Followings",
            foreignKey: "Followerid",
        }); //내가 팔로잉하는 사람을 찾으려면 나를 먼저 찾아야 한다.
    };

    return User;
};
