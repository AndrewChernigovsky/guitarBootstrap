import gulp from 'gulp';
import squoosh from 'gulp-libsquoosh';

function optimizeImages() {
	return gulp
		.src('source/img/**/*.{png,jpg}', 'source/images/**/*.{jpg,png}')
		.pipe(squoosh())
		.pipe(gulp.dest('build/img'));
}

export default optimizeImages;
