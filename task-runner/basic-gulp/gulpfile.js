var gulp = require("gulp");

gulp.task("a", (done) => {
    console.log("a");
    done();
});

gulp.task("b", (done) => {
    console.log("b");
    done();
});

// 標準
// gulp.task("default", (done) => {
//     console.log("Hello World.");
//     done();
// });

// 複数タスクを呼び出す（順番の指定なし）
// gulp.task("default", gulp.parallel("a", "b"));

// 複数タスクを呼び出す（順番の指定あり）
gulp.task('default', gulp.series("a", "b"));