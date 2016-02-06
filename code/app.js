var path = require('path'),
	app = require('express')(),
	db = require(path.join(__dirname, 'server', 'services', 'db')); 
	api = require(path.join(__dirname, 'server', 'controllers', 'donators')); 


app.use('/api/donators', api);

var server = app.listen(process.env.PORT || (process.argv[2] || process.env.npm_package_config_port), function () {
	db.connect();
	console.log(server.address());
});