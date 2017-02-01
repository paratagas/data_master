var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat');
    // to create source mapping
    sourcemaps = require('gulp-sourcemaps');

/*
 * Collect all js files to one bundle script
 * Command: "gulp bundle"
 */
gulp.task('bundle', function() {
    // choose any files in directories and it's subfolders
    return gulp.src('js/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(concat('bundle.js'))
        .pipe(sourcemaps.write('./'))
        //.pipe(uglify())
        // output result to current directory
        .pipe(gulp.dest('./'));
});

/*
 * Watch js files changing and run task
 * Command: "gulp watch"
 */
gulp.task('watch', function () {
	gulp.watch('./js/**/*.js', ['bundle']);
});
