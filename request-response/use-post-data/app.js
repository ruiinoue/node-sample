var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.render("./index.ejs");
});
app.post("/", (req, res) => {
    res.send("OK");
});

app.listen(3000);