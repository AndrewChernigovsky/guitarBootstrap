import del from "del";

async function cleanImages() {
	return del(["./build/img/**"], { force: true });
}

export default cleanImages;
