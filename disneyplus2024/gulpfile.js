const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');

function compilador() {
    return gulp.src('./source/styles/main.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(gulp.dest('./build/styles'));
};

function comprimir() {
    return gulp.src('./source/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'));
};

exports.default = comprimir;

exports.watch = function() {
    gulp.watch('./source/styles/*', gulp.series(compilador));
};