var gulp = require("gulp");
var less = require("gulp-less");
var cssmin = require("gulp-cssmin");

gulp.task("less", function(){
    gulp.src("app/less/*.less")
        .pipe(less())
        .pipe(cssmin())
        .pipe(gulp.dest("app/css"));
});

gulp.task('watch', function () {
    gulp.watch('app/less/*.less', ['less']);
});

gulp.task("default", ["less"]);
