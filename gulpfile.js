/**
 * Created by SanJeev on 21-06-2017.
 */

var gulp = require('gulp');
var clean = require('gulp-clean');
var uglify = require('gulp-uglify');
var open = require('gulp-open');
var watch=require('gulp-watch');
var webserver=require('gulp-webserver');

var _index='./panel/';
var options = {
    host: 'localhost',
    port:9000,
    livereload:true,
    directoryListening:true,
    open:true
};

gulp.task('open',function () {
    gulp.src(_index)
        .pipe(webserver(options));
});

gulp.task('watch',function () {
    gulp.watch('./gulpfile.js',['open']);
});

gulp.task('default', ['open','watch'], function() {

});
