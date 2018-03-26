var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    browserSync = require('browser-sync'),
    cssnext = require('postcss-cssnext'),
    imageop = require('gulp-image-optimization'),
    svgo = require('gulp-svgo');

gulp.task('css', function () {
  return gulp.src('app/css/*.css')
    .pipe(postcss([cssnext()]))
    .pipe(gulp.dest('dist/css'))
    .pipe(gulp.dest('app/req'));
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

gulp.task('images', function(cb) {
    gulp.src(['app/img/*.png','app/img/*.jpg','app/img/*.gif','app/img/*.jpeg']).pipe(imageop({
        optimizationLevel: 5,
        progressive: true,
        interlaced: true
    }))
    .pipe(gulp.dest('dist/img'))
    .on('end', cb).on('error', cb);
});

gulp.task('svg', () => {
    return gulp.src('app/img/*')
        .pipe(svgo())
        .pipe(gulp.dest('dist/img'));
});
