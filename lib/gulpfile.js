const gulp = require('gulp');
const ngc = require('gulp-ngc');
const clean = require('gulp-clean');
var tsc = require('gulp-typescript');

const tsConfig = {
        "module": "es2015",
        "moduleResolution": "node",
        "declaration": true,
        "target": "es5",
        "emitDecoratorMetadata": true,
        "experimentalDecorators": true,
        "lib": [
          "es2015",
          "dom"
        ],
        "outDir": "dist",
        "skipLibCheck": true    
};

gulp.task('compile', ['clean'], function () {    
    var tsResult = gulp.src('./src/**/*.ts')
        .pipe(tsc(tsConfig));

    tsResult.dts.pipe(gulp.dest('./dist'));
    return tsResult.js
                    .pipe(gulp.dest('./dist'));
});

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