'use strict';
var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var env = process.env.NODE_ENV;

switch(env) {
	case 'production':
	case 'build':
		console.log ('serving minified');
		app.use('/', express.static('./build/'));
		break;
	default:
		console.log ('serving non minified');
		app.use('/', express.static('./src/client/'));
		//for bower components
		app.use('/', express.static('./'));
	

}

app.listen(port, function() {
	console.log('Listening on port' + port);

});