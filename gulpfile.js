var gulp = require("gulp")
	runSequence = require('gulp-run-sequence'),
	uglify = require('gulp-uglify');

var src = {
	bundle_file : './bundle/*.*',
	source_file : './src/**/*.*'	
};

var dest = {
	bundle_release : './release/blog/bundle/',
	source_release : './release/blog/src/'
};

gulp.task('release_bundle', function() {
	gulp.src(src.bundle_file)
		.pipe(gulp.dest(dest.bundle_release));
});

gulp.task('release_src', function() {
	gulp.src(src.source_file)
		.pipe(gulp.dest(dest.source_release));
});

gulp.task('uglify', function() {
	gulp.src('./bundle/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('./bundle/'));
});

gulp.task('release', function() {
	gulp.src('index.html').pipe(gulp.dest('./release/blog'));
	return runSequence('uglify', 'release_bundle', 'release_src');
});

gulp.task('default', ['release']);
