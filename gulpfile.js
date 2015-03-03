var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var ngannotate = require('gulp-ng-annotate');
var rename = require('gulp-rename');
var minifyCSS = require('gulp-minify-css');
var rebaseUrls = require('gulp-css-rebase-urls');
var ghtmlSrc = require('gulp-html-src');
var htmlreplace = require('gulp-html-replace');
var minifyHTML = require('gulp-minify-html');
var stripDebug = require('gulp-strip-debug');
var del = require('del');

gulp.task('js', ['clean:before'], function () {
    return gulp.src('app/index.html')
        .pipe(ghtmlSrc())
        .pipe(concat('app.js'))
        .pipe(gulp.dest('build/assets/js'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(ngannotate())
        .pipe(stripDebug())
        .pipe(uglify())
        .pipe(gulp.dest('build/assets/js'))
});

gulp.task('css', ['clean:before'], function () {
    return gulp.src('app/index.html')
        .pipe(ghtmlSrc({ presets: 'css'}))
        .pipe(rebaseUrls({root: "app/assets/css"}))
        .pipe(concat('style.css'))
        .pipe(gulp.dest('build/assets/css'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(minifyCSS({keepSpecialComments:0}))
        .pipe(gulp.dest('build/assets/css'))
});

gulp.task('index', ['js', 'css'], function() {
    return gulp.src('app/index.html')
        .pipe(htmlreplace({
            'css': 'assets/css/style.min.css',
            'js': ['assets/js/app.min.js']
        }))
        //.pipe(rename({ suffix: '.min' }))
        .pipe(minifyHTML({empty:true,cdata:true,comments:true,conditionals:true,spare:true,quotes:true}))
        .pipe(gulp.dest('build/'));
});

gulp.task('partials', ['clean:before'], function() {
    return gulp.src(['app/partials/*/*.html', 'app/partials/*.html'])
        .pipe(minifyHTML({empty:true,cdata:true,comments:true,conditionals:true,spare:true,quotes:true}))
        .pipe(gulp.dest('build/partials/'));
});

gulp.task('clean:before', function() {
    return del([
        'build/'
    ]);
});

gulp.task('clean:after', ['js', 'css'], function() {
    return del([
        'build/assets/css/style.css',
        'build/assets/js/app.js'
    ]);
});

gulp.task('default', ['clean:before', 'js', 'css', 'index', 'partials', 'clean:after']);