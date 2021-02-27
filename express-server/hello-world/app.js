var express = require('express');
var app = express();

app.get("/", (req, res) => {
    // httpモジュールでの記述方法
    // res.writeHead(200);
    // res.write("Hello World.");
    // res.end();
    // exress特有の記述方法
    res.status(200).send("Hello World.");
});

// ポート番号を指定
app.listen(3000);