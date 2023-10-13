//model은 mysql의 테이블과 같은 개념이다.

mudule.exports = (sequelize, DataTypes) => {
    const Hashtag = sequelize.define(
        //여기서 Hashtag는 모델이름 => 자동으로 소문자화되고 복수형이 된다. ex)users

        "Hashtag",
        {
            name: { type: DataTypes.STRING(20), allowNull: false },
        },
        {
            charset: "utf8mb4", //이모티콘을 사용하려면 mb4를 추가해줘야한다.

            collate: "utf8_general_ci", //한글 저장
        }
    );
    Hashtag.associate = (db) => {
        db.Hashtag.belongToMany(db.Post); //포스트와는 다대다 관게
    };

    return Hashtag;
};
