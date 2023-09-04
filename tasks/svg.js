import gulp from 'gulp';
import svgo from 'gulp-svgmin';

function svg() {
	return gulp
		.src(['source/img/*.svg', '!source/img/icons/*.svg'])
		.pipe(svgo())
		.pipe(gulp.dest('build/img'));
};

export default svg;
