let gulp = require('gulp');
let sass = require('gulp-sass');

gulp.task('styles', function() {
  gulp.src('scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css/'))
});

gulp.task('watch', function() {
  gulp.watch('scss/**/*.scss',['styles']);
});
