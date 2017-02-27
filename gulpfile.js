var gulp = require('gulp'),
    dest = require('gulp-dest'),
	uglify = require('gulp-uglify'),
	jshint = require('gulp-jshint'),
	// rename = require('gulp-rename'),
	// gulpPlumber = require('gulp-plumber'),
    concat = require('gulp-concat'),
	connect = require('gulp-connect'),
	stylish = require('jshint-stylish'),
	csslint = require('gulp-csslint'),
    cleanCSS = require('gulp-clean-css'),
	sourcemaps = require('gulp-sourcemaps'),
    rimraf = require('rimraf');



var minAppRootFileName = "bundle.app.min.js";
var minCommonFileName = "bundle.common.min.js"
var minModelsFileName = "bundle.model.min.js";
var minViewsFileName = "bundle.view.min.js";
var minVmFileName = "bundle.vm.min.js";

gulp.task('connect', function() {
  connect.server({
    root: '',
    livereload: true
  });
});

gulp.task('scripts', function(){
    gulp.src('src/js/app.js')
        .pipe(sourcemaps.init())
        .pipe(concat(minAppRootFileName))
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist/js/'))
        .pipe(connect.reload());

    gulp.src('src/js/common/*.js')
        .pipe(sourcemaps.init())
        .pipe(concat(minCommonFileName))
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist/js/'))
        .pipe(connect.reload());
    gulp.src('src/js/model/*.js')
        .pipe(sourcemaps.init())
        .pipe(concat(minModelsFileName))
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist/js/'))
        .pipe(connect.reload());
    gulp.src('src/js/view/*.js')
        .pipe(sourcemaps.init())
        .pipe(concat(minViewsFileName))
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist/js/'))
        .pipe(connect.reload());
    gulp.src('src/js/vm/*.js')
        .pipe(sourcemaps.init())
        .pipe(concat(minVmFileName))
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist/js/'))
        .pipe(connect.reload());
});

gulp.task('min-css',function(){
    gulp.src('src/css/*.css')
        .pipe(sourcemaps.init())
        .pipe(concat("app.min.css"))
        .pipe(cleanCSS())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist/css/'))
        .pipe(connect.reload());
});


// 语法检查
// gulp.task('jshint', function(){
// 	return gulp.src('src/js/*.js')
// 	.pipe(jshint())
// 	.pipe(jshint.reporter(stylish));
// });

gulp.task('watch',function(){
	gulp.watch('src/js/*.js',['scripts']);
    gulp.watch('src/js/common/*.js',['scripts']);
    gulp.watch('src/js/model/*.js',['scripts']);
    gulp.watch('src/js/view/*.js',['scripts']);
    gulp.watch('src/js/vm/*.js',['scripts']);
    gulp.watch('src/css/*.css',['min-css']);
});

gulp.task('default', ['connect','watch']);