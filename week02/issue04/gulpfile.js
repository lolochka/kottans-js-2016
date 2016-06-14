var gulp = require('gulp'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync'),
    postcss = require('gulp-postcss'),
    cssnext = require('cssnext'),
	allUnset = require('postcss-all-unset');

var config = {
    server: {
        baseDir: "./"
    },
    tunnel: true,
    host: 'localhost',
    port: 9000,
    logPrefix: "Frontend_Devil"
};

gulp.task('css:build', function () {
    var processors = [
        cssnext(),
		allUnset()
    ];
    return gulp.src('./src/css/*.css')
        .pipe(postcss(processors))
        .pipe(gulp.dest('./dest/css'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('html:build', function() {
	return gulp.src('./src/*.html')
		.pipe(gulp.dest('./dest'))
		.pipe(browserSync.reload({stream: true}));
})

gulp.task('build', ['css:build', 'html:build']);

gulp.task('watch', function () {
    watch(['./src/css/*.css'], function (event, cb) {
        gulp.start('css:build');
    });
});

gulp.task('webserver', function () {
    browserSync(config);
});

gulp.task('default', ['build', 'webserver', 'watch']);