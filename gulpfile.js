import sass2css from './tasks/sass2css.js';
import pug2html from './tasks/pug2html.js';
import scripts from './tasks/scriptjs.js';
import optimizeImages from './tasks/optimizeImages.js';
import copyImages from './tasks/copyimages.js';
import createWebp from './tasks/createWebp.js';
import vendors from './vendors.js';
import copy from './tasks/copy.js';
import clean from './tasks/clean.js';
import cleanImages from './tasks/cleanImages.js';
import server from './tasks/server.js';
import watcher from './tasks/watcher.js';
import svg from './tasks/svg.js';
import sprite from './tasks/sprite.js';
import fonts from './tasks/fonts.js';
import sharp from './tasks/sharp.js';
import gulp from 'gulp';

export const build = gulp.series(
	clean,
	copy,
	gulp.parallel(sass2css, pug2html),
	gulp.series(scripts)
);

export const images1 = gulp.series(
	cleanImages,
	sharp,
	copyImages
);

export const sprite1 = gulp.series(svg, sprite);

export const sharp1 = gulp.series(
	cleanImages,
	sharp,
	createWebp,
	sprite1
);


export const images = gulp.series(
	images1,
	createWebp,
	optimizeImages
);

export const webp
	= gulp.series(
	createWebp
);

export const vendorTask = gulp.series(
	vendors,
	fonts
);

export default gulp.series(
	clean,
	copy,
	gulp.parallel(sass2css, pug2html),
	gulp.series(scripts),
	gulp.series(server, watcher)
);

