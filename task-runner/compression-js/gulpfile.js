var gulp = require("gulp");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");

// 単純な圧縮
// var minifyTask = async function () {
//     return gulp.src("sample1.js", { cwd: "./src" })
//         .pipe(uglify())
//         .pipe(gulp.dest("./dist"));
// };

// 結合とリネームをして圧縮
var minifyTask = async function () {
    return gulp.src(["sample1.js", "sample2.js"], { cwd: "./src" })
        .pipe(concat("bundle.js"))
        .pipe(uglify())
        .pipe(rename({ suffix: ".min" }))
        .pipe(gulp.dest("./dist"));
};

module.exports.default = minifyTask;