const   gulp = require('gulp'),
		ts = require('gulp-typescript'),
		clean = require('gulp-clean');

const   BUILD_DIRECTORY = 'dist',
		tsProject = ts.createProject('tsconfig.json');

gulp.task('watch', ['scripts'], () => {
    gulp.watch('src/**/*.ts', ['scripts']);
});

gulp.task('clean-scripts', function () {
    return gulp.src(BUILD_DIRECTORY, {read: false}).pipe(clean());
});

gulp.task('scripts', function () {
    const tsResult = tsProject.src().pipe(tsProject());
    return tsResult.js.pipe(gulp.dest(BUILD_DIRECTORY));
});

gulp.task('build', ['scripts']);