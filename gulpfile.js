var gulp = require('gulp');
var runSequence = require('run-sequence');
var browserSync = require('browser-sync');
var del = require('del');
var deploy = require('gulp-gh-pages');

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: "src"
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

gulp.task('copy', function() {
    return gulp.src('./src/**/*')
        .pipe(gulp.dest('./dist'));
});

gulp.task('deploy', function() {
    return gulp.src('./dist/**/*')
        .pipe(deploy())
});

gulp.task('publish', function() {
    runSequence(
        'clean:dist',
        'copy',
        'deploy')
});

gulp.task('watch', ['browserSync'], function() {
    gulp.watch('src/*.html', browserSync.reload);
});

gulp.task('default', ['build', 'watch']);