const express = require("express");

const router = express.Router();

router.post("/", (req, res) => {
    // 보기에는 "/"로 되어있지만 실제로는 "/post"로 되어있다.
    res.json({ id: 1, content: "hello" });
});

router.delete("/", (req, res) => {
    res.json({ id: 1 });
});
module.exports = router;
//node에서는 import와 export default를 사용하지 않고 require를 사용한다.
