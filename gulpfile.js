'use strict';

const browserSync =     require('browser-sync').create();
const gulp =            require('gulp');
const autoPrefixer =    require('gulp-autoprefixer');
const cleanCss =        require('gulp-clean-css');
const rename =          require('gulp-rename');
const sass =            require('gulp-sass');

const baseDir =         './';

gulp.task('serve', ['scss'], function() {
  browserSync.init({
    server: {
      baseDir: baseDir
    }
  });

  gulp.watch(baseDir + 'css/*.scss', ['scss']);
  gulp.watch(baseDir + 'index.html').on('change', browserSync.reload);
});

gulp.task('scss', function() {
  return gulp.src(baseDir + 'css/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoPrefixer('last 2 versions'))
    .pipe(gulp.dest(baseDir + 'css'))
    .pipe(rename({suffix: '.min'}))
    .pipe(cleanCss())
    .pipe(gulp.dest(baseDir + 'css'))
    .pipe(browserSync.stream()); // auto-inject changes into browser
});

gulp.task('default', ['serve']);
