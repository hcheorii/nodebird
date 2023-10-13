//model은 mysql의 테이블과 같은 개념이다.

mudule.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
        //여기서 User는 모델이름 => 자동으로 소문자화되고 복수형이 된다. ex)users

        "User",
        {
            //id는 mysql에서 자동으로 넣어주기 때문에 필요없다.
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
    User.associate = (db) => {};

    return User;
};
