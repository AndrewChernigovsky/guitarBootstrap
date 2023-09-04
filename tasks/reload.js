import browser from 'browser-sync';

function reload(done) {
	browser.reload();
	done();
}

export default reload;