// sample1.txt をリネームして distフォルダ へコピーする
var gulp = require("gulp");
var rename = require("gulp-rename");

var renameTask = async function() {
    return gulp.src("./src/sample1.txt")
        .pipe(rename({ suffix: ".min" }))
        .pipe(gulp.dest("./dist"));
};

module.exports.default = renameTask;