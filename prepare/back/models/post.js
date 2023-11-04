//model은 mysql의 테이블과 같은 개념이다.

module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define(
        //여기서 Post는 모델이름 => 자동으로 소문자화되고 복수형이 된다. ex)usersㅅ

        "Post",
        {
            content: { type: DataTypes.TEXT, allowNull: false }, //글자 무제한
        },
        {
            charset: "utf8mb4", //이모티콘을 사용하려면 mb4를 추가해줘야한다
            collate: "utf8mb4_general_ci", //한글 저장
        }
    );
    Post.associate = (db) => {
        db.Post.belongsTo(db.User);
        //어떤 게시물은 어떤 유저에 속해있다. (작성자)
        //post.addUser, post.getUser, post.setUser
        db.Post.hasMany(db.Comment);
        //한 게시물에 댓글 여러개
        //post.addComments, post.getComments
        db.Post.hasMany(db.Image); //한 게시물에 이미지 여러개
        db.Post.belongsToMany(db.Hashtag, { through: "PostHashtag" });
        //해시태그와는 다대다 관게
        //post.addHashtags생김
        db.Post.belongsToMany(db.User, { through: "Like", as: "Likers" });
        //게시글 좋아요와 유저는 다대다 관계, 중간 테이블의 이름은 Like
        //post.addLikers같은것이 생긴다.
        //post.removeLikers도 생긴다.
        db.Post.belongsTo(db.Post, { as: "Retweet" }); //리트윗관계(1대다) //post.addRetweet생김
    };

    return Post;
};
