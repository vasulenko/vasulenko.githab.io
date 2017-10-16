var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    cleanCSS = require('gulp-clean-css'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('browser-sync', function () {
    browserSync({
        server: {
            baseDir: 'app'
        },
        notify: false,
    });
});
gulp.task('sass', function () {
    return gulp.src('app/sass/**/*.sass')
        .pipe(sass({outputStyle: 'expand'}))
        .pipe(autoprefixer(['last 3 versions']))
        .pipe(cleanCSS())
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({stream: true}));
});
gulp.task('fonts', function () {
    return gulp.src('app/fonts/**/*')
        .pipe(gulp.dest('dist/fonts'))
});
gulp.task('watch', ['sass', 'browser-sync', 'fonts'], function () {
    gulp.watch('app/sass/**/*.sass', ['sass']);
    gulp.watch('app/fonts/**/*.ttf', ['fonts']);
    gulp.watch('app/js/**/*.js', ['js']);
    gulp.watch('app/**/*.html', browserSync.reload);
});
gulp.task('js', function () {
    return gulp.src('app/js/**/*')
        .pipe(gulp.dest('dist/js'))
});
gulp.task('build', [`sass`, `fonts`], function () {
    var buildFiles = gulp.src([
        'app/!*.html',
        'app/.htaccess',
    ]).pipe(gulp.dest('dist'));

    var buildCss = gulp.src([
        'app/css/main.min.css',
    ]).pipe(gulp.dest('dist/css'));

    var buildFonts = gulp.src([
        'app/fonts/!**!/!*',
    ]).pipe(gulp.dest('dist/fonts'));

});

gulp.task('default', ['watch']);