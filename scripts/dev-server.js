var liveServer = require("live-server");

var params = {
	root: "./dist",	// builds get output to dist/
	wait: 1000,   	// wait for things to settle before reloading
	// open: false, 	// don't open the browser

};
liveServer.start(params);