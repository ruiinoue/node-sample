// sample1.txt と sample2.txt を結合して distフォルダ へ出力する
var gulp = require("gulp");
var concat = require("gulp-concat");

var concatTask = async function() {
    return gulp.src(["sample1.txt", "sample2.txt"], { cwd: "./src" })
        .pipe(concat("bundle.js"))
        .pipe(gulp.dest("./dist"));
};

module.exports.default = concatTask;