'use strict';

const gulp						= require('gulp');
const watch						= require('gulp-watch');
const ts 							= require('gulp-typescript');
const clean 					= require('gulp-clean');
const tsProject 			= ts.createProject('./tsconfig.json');
const BUILD_DIRECTORY = 'dist';


gulp.task('clean-scripts', function () {
	return gulp.src(BUILD_DIRECTORY, {read: false}).pipe(clean());
});

gulp.task('watch', function() {
	gulp.watch('./**/*.ts', gulp.series('scripts'));
});

gulp.task('default', gulp.series('watch'));

gulp.task('scripts', function () {
  const tsResult = tsProject.src().pipe(tsProject());
  return tsResult.js.pipe(gulp.dest(BUILD_DIRECTORY));
});



//const   gulp = require('gulp'),
//		ts = require('gulp-typescript'),
//		clean = require('gulp-clean');

//const   BUILD_DIRECTORY = 'dist',
//		tsProject = ts.createProject('tsconfig.json');

//gulp.task('watch', ['scripts'], () => {
//    gulp.watch('src/**/*.ts', ['scripts']);
//});

//gulp.task('clean-scripts', function () {
//    return gulp.src(BUILD_DIRECTORY, {read: false}).pipe(clean());
//});

//gulp.task('scripts', function () {
//    const tsResult = tsProject.src().pipe(tsProject());
//    return tsResult.js.pipe(gulp.dest(BUILD_DIRECTORY));
//});

//gulp.task('build', ['scripts']);
