import gulp from 'gulp';
import newer from "gulp-newer";

async function copyImages() {
	return gulp
		.src(["source/img/**/*.{png,jpg}", "source/img/*.svg"])
		.pipe(newer("build/img"))
		.pipe(gulp.dest("build/img"));
}

export default copyImages;
