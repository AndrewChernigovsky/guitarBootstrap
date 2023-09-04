import gulp from 'gulp';

function copy(done) {
	gulp.src(
		[
			"source/fonts/*.{woff2,woff,ttf}",
			"source/*.ico",
			"source/video/**",
			"source/img/icons/**",
			"source/img/icons-inline/**",
		],
		{
			base: "source",
		}
	).pipe(gulp.dest("build"));
	done();
}

export default copy;
