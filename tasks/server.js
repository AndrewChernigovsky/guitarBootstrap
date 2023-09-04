import browser from 'browser-sync';

function server(done) {
	browser.init({
		watch: true,
		files: ['css/style.min.css', 'js/*.js', '*.html'],
		server: {
			baseDir: 'build',
		},
		cors: true,
		notify: false,
		ui: false,
		port: 3000,
	});
	done();
}

export default server;
