var gulp = require("gulp");
var less = require("gulp-less");
var cssmin = require("gulp-cssmin");
//var jade = require('gulp-jade');

gulp.task("less", function(){
    gulp.src("app/less/*.less")
        .pipe(less())
        .pipe(cssmin())
        .pipe(gulp.dest("app/css"));
});

gulp.task('watch', function () {
    gulp.watch('app/less/*.less', ['less']);
});

/*gulp.task('templates', function() {
  var YOUR_LOCALS = {};

  gulp.src('./app/*.jade')
    .pipe(jade({
      locals: YOUR_LOCALS
    }))
    .pipe(gulp.dest('./dist/'))
});*/

gulp.task("default", ["less"]);
