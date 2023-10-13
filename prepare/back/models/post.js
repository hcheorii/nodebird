//model은 mysql의 테이블과 같은 개념이다.

mudule.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define(
        //여기서 Post는 모델이름 => 자동으로 소문자화되고 복수형이 된다. ex)usersㅅ

        "Post",
        {
            content: { type: DataTypes.TEXT, allowNull: false },
        },
        {
            charset: "utf8mb4", //이모티콘을 사용하려면 mb4를 추가해줘야한다.

            collate: "utf8_general_ci", //한글 저장
        }
    );
    Post.associate = (db) => {};

    return Post;
};
