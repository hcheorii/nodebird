const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || "development";
//배포할때는 production, 개발할때는 development

const config = require("../config/config")[env];
const db = {};
const sequelize = new Sequelize( //sequelize는 노드와 mysql을 연결시켜주는 역할.
    config.database,
    config.username,
    config.password,
    config
);

db.Comment = require("./comment")(sequelize, Sequelize);
db.Post = require("./post")(sequelize, Sequelize);
db.Image = require("./image")(sequelize, Sequelize);
db.Hashtag = require("./hashtag")(sequelize, Sequelize);
db.User = require("./user")(sequelize, Sequelize);

Object.keys(db).forEach((modelName) => {
    //각각의 js파일에 보면 associate있는 부분을 실행해준다.
    //관계들 모두 연결해주는 단계
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
