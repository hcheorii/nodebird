//model은 mysql의 테이블과 같은 개념이다.

mudule.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define(
        //여기서 Comment는 모델이름 => 자동으로 소문자화되고 복수형이 된다. ex)users

        "Comment",
        {
            content: { type: DataTypes.TEXT, allowNull: false },
        },
        {
            charset: "utf8mb4", //이모티콘을 사용하려면 mb4를 추가해줘야한다.

            collate: "utf8_general_ci", //한글 저장
        }
    );
    Comment.associate = (db) => {
        db.Comment.belongsTo(db.User); //어떤 게시물은 어떤 유저에 속해있다.
    };

    return Comment;
};
