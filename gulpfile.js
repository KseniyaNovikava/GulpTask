var gulp = require('gulp'),
    util = require('gulp-util'),
    gulpProtractorAngular = require('gulp-angular-protractor');



// Setting up the test task 
gulp.task('protractor', function(callback) {
    util.env.browser ? process.env.BROWSER = util.env.browser : process.env.BROWSER = 'chrome';
    util.env.tag ? process.env.TAGS = util.env.tag : process.env.TAGS = [];
    gulp
        .src(['features/*'])
        .pipe(gulpProtractorAngular({
            'configFile': 'conf.js',
            'debug': false,
            'autoStartStopServer': true
        }))
        .on('error', function(e) {
            console.log(e);
        })
        .on('end', callback);
});

gulp.task('protractor-multi', function(callback) {
    gulp
        .src(['*.features'])
        .pipe(gulpProtractorAngular({
            'configFile': 'conf-multi.js',
            'debug': false,
            'autoStartStopServer': true
        }))
        .on('error', function(e) {
            console.log(e);
        })
        .on('end', callback);
});