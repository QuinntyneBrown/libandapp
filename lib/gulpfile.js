const gulp = require('gulp');
const ngc = require('gulp-ngc');
const clean = require('gulp-clean');

gulp.task('clean',() => {
    return gulp.src('dist/**/*.*', { read: false })
        .pipe(clean());
});

gulp.task('ngc', () => {
    return ngc('tsconfig.json');
});
 
gulp.task('default',() => {
    return gulp.watch('./src/**/*.{css,html,ts}', ['clean','ngc']);
});