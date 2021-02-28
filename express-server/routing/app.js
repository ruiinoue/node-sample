var express = require("express");
var app = express();

// 基本的なルーティング
// app.get("/home/index", (req, res) => {
//     res.status(200).send("OK");
// });

// 名前付きパラメーター
// app.get("/user/:id?", (req, res) => {
//     console.log(req.params.id);
//     res.status(200).send("OK");
// });

// Routerモジュールを呼び出す
app.use("/user", require("./router/user.js"));

app.listen(3000);