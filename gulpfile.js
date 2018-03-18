var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    browserSync = require('browser-sync'),
    cssnext = require('postcss-cssnext');

gulp.task('css', function () {
  return gulp.src('app/css/*.css')
    .pipe(postcss([cssnext()]))
    .pipe(gulp.dest('dist/css'))
    .pipe(gulp.dest('app/req/css'));
});

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: 'app'
        },
        notify: false
    });
});

gulp.task('watch', ['browser-sync', 'css'], function() {
    gulp.watch('app/css/*.css', ['css']);
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/js/*.js', browserSync.reload);
});
