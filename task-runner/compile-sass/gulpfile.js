var gulp = require("gulp");
var concat = require("gulp-concat");
var sass = require("gulp-sass");
var rename = require("gulp-rename");

// 単純なsassコンパイル
// var scssTask = async function () {
//     return gulp.src("./src/*.scss")
//         .pipe(sass({ outputStyle: "expanded" }))
//         .pipe(gulp.dest("./dist"));
// };

// 結合とリネームしてsassコンパイル
var scssTask = async function () {
    return gulp.src(["sample1.scss", "sample2.scss"], { cwd: "./src" })
        .pipe(concat("bundle.scss"))
        .pipe(sass({ outputStyle: "compressed" }))
        .pipe(rename({ suffix: ".min" }))
        .pipe(gulp.dest("./dist"));
};

module.exports.default = scssTask;