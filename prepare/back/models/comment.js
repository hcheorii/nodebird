//model은 mysql의 테이블과 같은 개념이다.

module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define(
        //여기서 Comment는 모델이름 => 자동으로 소문자화되고 복수형이 된다. ex)users

        "Comment",
        {
            content: { type: DataTypes.TEXT, allowNull: false },
        },
        {
            charset: "utf8mb4", //이모티콘을 사용하려면 mb4를 추가해줘야한다.
            collate: "utf8mb4_general_ci", //한글 저장
        }
    );
    Comment.associate = (db) => {
        db.Comment.belongsTo(db.User); //어떤 댓글은 어떤 유저에 속해있다.
        db.Comment.belongsTo(db.Post); //여러 댓글이 한 게시물에 속한다.
    };

    return Comment;
};
