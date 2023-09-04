import Sharp from "sharp";
import fs from "fs";
import path from "path";

let regexp = /\.[^/.]+$/;
let regexp2 = /[^/]+\.(gif|jpg|png)/gm;

async function sharp() {

	function traverseDir(dir) {
		let arrImagesPaths = [];
		let arrImagesFiles = [];
		let arr = []

		function readPaths() {
			fs.readdirSync(dir).forEach((file) => {
				let fullPath = path.join(dir, file);
				if (fs.lstatSync(fullPath).isDirectory()) {
					if (fullPath !== "source\\img\\icons" && fullPath !== "source\\img\\icons-inline") {
						arrImagesPaths.push(fullPath, 'arrPaths');
						traverseDir(fullPath);
					}
				} else {
					arrImagesFiles.push(fullPath);
				}
			});
		}

		readPaths();

		function createNametoPath() {

			for (let i = 0; i < arrImagesFiles.length; i++) {
				let obj = {}
				obj.path = arrImagesFiles[i].replaceAll("\\", "/")
				obj.name = obj.path.match(regexp2)
				arr.push(obj)
			}

		}

		createNametoPath();

		function createNameExtension() {

			for (let i = 0; i < arr.length; i++) {
				let obj = arr[i];
				let name = obj.name;
				let path = obj.path.replace(name, "");

				let ext = name[0].match(regexp)[0];
				let file = name[0].replace(ext, '');

				createFolders(path)
				resizeImage(path, file, ext, '-1', 3120, 1560, 780);
			}
		}
		createNameExtension();
	}

	traverseDir('./source/img');
}

async function resizeImage(path, file, ext, name = '', widthLarge, widthMiddle, widthSmall) {
	let pathBuild = path.replace('source', 'build');
	console.log(path,file,ext,'input');
	console.log(pathBuild,file,name, ext,'output');

	try {
		if (widthLarge) {
			name = '-large'
			await Sharp(`${path}/${file}${ext}`)
				.resize({
					width: widthLarge,
				})
				.toFile(
					`${pathBuild}${file}${name}${ext}`
				);
		}
		if (widthLarge) {
			name = '-medium@2x'
			await Sharp(`${path}/${file}${ext}`)
				.resize({
					width: widthLarge,
				})
				.toFile(
					`${pathBuild}${file}${name}${ext}`
				);
		}
		if (widthMiddle) {
			name = '-medium'
			await Sharp(`${path}/${file}${ext}`)
				.resize({
					width: widthMiddle,
				})
				.toFile(`${pathBuild}${file}${name}${ext}`);
		}
		if (widthMiddle) {
			name = '-small@2x'
			await Sharp(`${path}/${file}${ext}`)
				.resize({
					width: widthMiddle,
				})
				.toFile(`${pathBuild}${file}${name}${ext}`);
		}
		if (widthSmall) {
			name = '-small'
			await Sharp(`${path}/${file}${ext}`)
				.resize({
					width: widthSmall,
				})
				.toFile(`${pathBuild}${file}${name}${ext}`);
		}
	} catch (err) {
		console.log(err);
	}
}

function createFolders(path) {
	path = path.replace('source', 'build')
	console.log(path);
		try {
			if (!fs.existsSync(path)) {
				fs.mkdirSync((path), {recursive: true});
				console.log(path + " already exists")
			}
		} catch (err) {
			console.error(err);
		}
}

export default sharp;
