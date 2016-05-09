var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

gulp.task('default', function () {

  return browserify('./source/noReactApp.js')
    .transform(babelify)
    .bundle()
    .pipe(source('reactless.js'))
    .pipe(gulp.dest('./build/'));
});

