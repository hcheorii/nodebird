const express = require("express");
const postRouter = require("./routes/post");
const userRouter = require("./routes/user");
const cors = require("cors");

const app = express(); //익스프레스 서버
const db = require("./models");

db.sequelize
    .sync()
    .then(() => {
        console.log("db 연결 성공");
    })
    .catch(console.error);

app.use(express.json());
//익스프레스서버에 뭔가를 장착하겠다.
//프론트에서 Json 형식으로 받은 것을 req.body에 넣어준다.
app.use(express.urlencoded({ extended: true }));
//form에서 제출한 것을 넘겨준다.
//front에서 보낸 action.data를 req.body에 넣어주느 역할

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
app.use(
    cors({
        origin: "*",
        credentials: false,
    })
); //cors설정
//res.setHeader("Access-Control-Allow-Origin", "http://localhost:3060");
//CORS해결법 *은 모든 주소에 대해서 라는 뜻
//localhost 3060에서 온 것은 허용해주게싸
app.use("/post", postRouter); //"/post"가 중복되므로 앞으로 뽑아줄 수 있다.
app.use("/user", userRouter); //"/post"가 중복되므로 앞으로 뽑아줄 수 있다.

app.listen(3065, () => {
    console.log("서버 실행 중");
});
