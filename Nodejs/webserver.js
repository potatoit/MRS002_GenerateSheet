var connect = require('connect');
var serveStatic = require('serve-static');

function printUsageAndExit() {
	console.log("Usage:");
	console.log("node webserver.js <port> \"<path>\"");
	console.log("Examples:");
	console.log("node webserver.js 8080 \"../\"");
	console.log("node webserver.js 80 \"C:/Web/MyApplication\"");
	process.exit();
}

var args = process.argv;
if (args.length != 4) {
	printUsageAndExit();
}

var port = args[2];
var path = args[3];

console.log('Starting web server at localhost:' + port + " for directory \"" + path + "\"");
connect().use(serveStatic(path)).listen(port);
