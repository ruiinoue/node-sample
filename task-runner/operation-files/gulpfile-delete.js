// コピーした "sample1.txt" を distフォルダ から削除する
var gulp = require("gulp");
var del = require("del");

var deleteTask = async function() {
    return del("./dist/*");
};

module.exports.default = deleteTask;