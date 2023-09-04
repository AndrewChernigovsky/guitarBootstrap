import gulp from 'gulp';
import ttf2woff from 'gulp-ttf2woff';
import ttf2woff2 from 'gulp-ttf2woff2';

function ttf2woffF() {
	return gulp
		.src(['source/fonts/*.ttf'])
		.pipe(ttf2woff())
		.pipe(gulp.dest('build/fonts/'));
}
function ttf2woff2F() {
	return gulp
		.src(['source/fonts/*.ttf'])
		.pipe(ttf2woff2())
		.pipe(gulp.dest('build/fonts/'));
}

async function fonts() {
	ttf2woffF();
	ttf2woff2F();
}

export default fonts;