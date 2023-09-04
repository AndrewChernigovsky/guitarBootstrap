import gulp from 'gulp';
import sass2css from './sass2css.js';
import pug2html from './pug2html.js';
import scripts from './scriptjs.js';
import reload from './reload.js';

function watcher() {
	gulp.watch('source/**/*.pug', gulp.series(pug2html, reload));
	gulp.watch(
		['source/sass/**/*.scss', 'source/sass/**/styles.scss'],
		gulp.series(sass2css, reload)
	);
	gulp.watch(['source/js/*.js', 'source/vendorInit/**/*.js'], gulp.series(scripts));
}

export default watcher;
