const express = require("express");
const postRouter = require("./routes/post");
const app = express();
const db = require("./models");

db.sequelize
    .sync()
    .then(() => {
        console.log("db 연결 성공");
    })
    .catch(console.error);

app.get("/", (req, res) => {
    res.send("hello express");
});
app.get("/api", (req, res) => {
    res.send("hello api");
});

app.get("/api/posts", (req, res) => {
    res.json([
        { id: 1, content: "hello" },
        { id: 2, content: "hello2" },
        { id: 3, content: "hello3" },
    ]);
});

app.use("/post", postRouter); //"/post"가 중복되므로 앞으로 뽑아줄 수 있다.

app.listen(3065, () => {
    console.log("서버 실행 중");
});
