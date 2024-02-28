//model은 mysql의 테이블과 같은 개념이다.

module.exports = (sequelize, DataTypes) => {
    const Image = sequelize.define(
        //여기서 Image는 모델이름 => 자동으로 소문자화되고 복수형이 된다. ex)users

        "Image",
        {
            src: { type: DataTypes.STRING(1000), allowNull: false },
        },
        {
            charset: "utf8",
            collate: "utf8_general_ci", //한글 저장
        }
    );
    Image.associate = (db) => {
        db.Image.belongsTo(db.Post); //어떤 이미지은 어떤 게시물에 속해있다.
    };

    return Image;
};
