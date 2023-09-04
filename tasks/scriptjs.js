import gulp from 'gulp';
import uglify from 'gulp-uglify';
import rename from 'gulp-rename';
import browserify from 'browserify';
import source from 'vinyl-source-stream';
import notify from  'gulp-notify';
import buffer from 'vinyl-buffer';

async function scripts() {
	return (
		browserify({
		entries: `./source/js/script.js`,
	})
		.transform('babelify', {
			presets: ['@babel/preset-env'],
			sourceMaps: true,
			global: true
		})
		.bundle()
		.on(
			'error',
			notify.onError({
				title: 'JS compiling error',
				wait: true,
			})
		)
		.pipe(source('script.js'))
		.pipe(buffer())
		.pipe(uglify())
		.pipe(rename('script.min.js'))
		.pipe(gulp.dest(`./build/js`))
	);
}

export default scripts;
