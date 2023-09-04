import gulp from 'gulp';
import pug from 'gulp-pug';

function pug2html() {
	(function () {
		return gulp
			.src('source/pug/pages/**/*.pug')
			.pipe(pug({ pretty: true }))
			.pipe(gulp.dest('build/pages'));
	})()

	return gulp
		.src("source/index.pug")
		.pipe(pug({ pretty: true }))
		.pipe(gulp.dest("build"))
		.pipe(gulp.src("source/pug/pages/**/*.pug"))
		.pipe(pug({ pretty: true }))
		.pipe(gulp.dest("build/pages"));
}

export default pug2html;
