var express = require('express');
var app = express();

// ミドルウェア呼び出し
app.use(require("./lib/logger.js"));

app.get("/", (req, res) => {
    res.status(200).send("Hello World.")
});

app.listen(3000);