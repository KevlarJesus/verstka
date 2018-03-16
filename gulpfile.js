var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    browserSync = require('browser-sync');

gulp.task('css', function () {
  return (
    gulp.src('app/*.css')
    .pipe(postcss([
      //require("postcss-import")(),
      //require("postcss-url")(),
      require("postcss-cssnext")()
      // add your "plugins" here
      // ...
      // and if you want to compress
      // Disable autoprefixer, because it's already included in cssnext
      // require("cssnano")({ autoprefixer: false }),
      //require("postcss-browser-reporter")(),
      //require("postcss-reporter")(),
    ]))
    .pipe(gulp.dest('dest/css'))
  )
})

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
});
