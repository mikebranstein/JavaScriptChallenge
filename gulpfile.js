var gulp = require('gulp');
var runSequence = require('run-sequence');
var browserSync = require('browser-sync').create();
var del = require('del');
var deploy = require('gulp-gh-pages');

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: "dist"
        }
    });
});

gulp.task('build', function() {
    runSequence(
        'clean:dist',
        'copy')
});

gulp.task('clean:dist', function() {
    return del.sync(['dist/**', '!dist']);
});

gulp.task("html", function () {
    return gulp.src("src/*.html")
        .pipe(gulp.dest("dist"));
});

gulp.task("css", function () {
    return gulp.src("src/css/*.css")
        .pipe(gulp.dest("dist/css"));
});

gulp.task("js", function () {
    return gulp.src("src/js/*.html")
        .pipe(gulp.dest("dist/js"));
});

gulp.task("all-watch", ["html","css","js"], function(done) {
    browserSync.reload();
    done();
});

gulp.task('copy', function() {
    gulp.src('./src/**/*')
        .pipe(gulp.dest('./dist'));
    gulp.src('./node_modules/jquery/dist/jquery.min.js')
        .pipe(gulp.dest("./dist/js"));
    gulp.src('./node_modules/bootstrap/dist/css/**')
        .pipe(gulp.dest("./dist/css"));
    return gulp.src('./node_modules/bootstrap/dist/js/**')
        .pipe(gulp.dest("./dist/js"));
});

gulp.task('deploy', function() {
    return gulp.src('./dist/**/*')
        .pipe(deploy());
});

gulp.task('publish', function() {
    runSequence(
        'clean:dist',
        'copy',
        'deploy')
});

gulp.task('watch', ['browserSync'], function() {
    gulp.watch('src/*.html', ["all-watch"]);
    gulp.watch('src/js/*.js', ["all-watch"]);
    gulp.watch('src/css/*.css', ["all-watch"]);
});

gulp.task('default', ['build', 'watch']);