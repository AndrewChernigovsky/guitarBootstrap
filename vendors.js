import gulp from "gulp";
import concatCSS from "gulp-concat-css";
import concat from "gulp-concat";
import rename from "gulp-rename";
import postcss from "gulp-postcss";
import autoprefixer from "autoprefixer";
import csso from "postcss-csso";
import uglifyjs from "gulp-uglify";
import plumber from 'gulp-plumber';
import sass from 'gulp-dart-sass';
import browser from 'browser-sync';

function scss2css() {
	return gulp
		.src("./node_modules/bootstrap/scss/bootstrap.scss", {
			sourcemaps: true,
		})
		.pipe(plumber())
		.pipe(sass().on("error", sass.logError))
		.pipe(postcss([autoprefixer(), csso()]))
		.pipe(rename("bootstrap.min.css"))
		.pipe(gulp.dest("vendors/css", { sourcemaps: "." }))
		.pipe(browser.stream());
}

const pathsCSS = {
	swiper: "./node_modules/swiper/swiper-bundle.min.css",
	bootstrap: "./vendors/css/bootstrap.min.css",
};

const pathsJS = {
	swiper: "./node_modules/swiper/swiper-bundle.min.js",
	bootstrap: "./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js",
};

function arr(a) {
	let arr = [];

	if (a === "css") {
		for (let key in pathsCSS) {
			arr.push(pathsCSS[key]);
		}
	}

	if (a === "js") {
		for (let key in pathsJS) {
			arr.push(pathsJS[key]);
		}
	}

	return arr;
}

function vendorsCSS() {
	return gulp
		.src(arr("css"))
		.pipe(concatCSS("vendors.css"))
		.pipe(postcss([autoprefixer(), csso()]))
		.pipe(rename("vendors.min.css"))
		.pipe(gulp.dest("./build/css"));
}

function vendorsJS() {
	return gulp
		.src(arr("js"))
		.pipe(concat("vendors.js"))
		.pipe(uglifyjs())
		.pipe(rename("vendors.min.js"))
		.pipe(gulp.dest("./build/js"));
}

async function vendors() {
	scss2css();
	vendorsCSS();
	vendorsJS();
}

export default vendors;
