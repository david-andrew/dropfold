var liveServer = require("live-server");

var params = {
	root: "./dist",	// builds get output to dist/
	wait: 100,   	// wait for things to settle before reloading
	open: false, 	// don't open the browser

};
liveServer.start(params);