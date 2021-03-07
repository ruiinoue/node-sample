//  sample1.txt を srcフォルダ から distフォルダ へコピー
var gulp = require("gulp");

var copyTask = async function() {
    return gulp.src("./src/sample1.txt")
        .pipe(gulp.dest("./dist"));
};

module.exports.default = copyTask;