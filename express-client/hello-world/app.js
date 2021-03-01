var express = require("express");
var app = express();

// ejsの設定
app.set("view engine", "ejs");
// 静的ファイルの配信設定
app.use("/public", express.static(__dirname + "/public"));
// Router呼び出し
app.use("/", require("./route/index.js"));

app.listen(3000);