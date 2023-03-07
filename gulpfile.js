const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const obfuscate = require('gulp-obfuscate');
const imageMin = require('gulp-imagemin');

function compressImg() {
    return gulp.src('./source/images/*')
        .pipe(imageMin())
        .pipe(gulp.dest('./build/images'))
}

function compressJs() {
    return gulp.src('./source/scripts/*.js')
        .pipe(uglify())
        .pipe(obfuscate())
        .pipe(gulp.dest('./build/scripts'))
}

function compilerSass() {
    return gulp.src('./source/styles/main.scss')
        .pipe(sourcemaps.init())
            .pipe(sass({
                outputStyle: 'compressed'
            }))
            .pipe(sourcemaps.write('./maps'))
            .pipe(gulp.dest('./build/styles'))
};

exports.default = function() {
    gulp.watch('./source/styles/main.scss', {ignoreInitial: false}, gulp.series(compilerSass));
    gulp.watch('./source/scripts/*js', {ignoreInitial: false}, gulp.series(compressJs));
    gulp.watch('./source/images/*', {ignoreInitial: false}, gulp.series(compressImg));
}