var path = require('path'),
	Donators = require(path.join(__dirname, '..', 'models', 'donators')),
	express = require('express'),
	parser = require('body-parser');

var api = express();
api.use(parser.json());

api.post('/', function (req, res) {
	var donator = req.body;
	donator.ip = req.ip;
	Donators.create(donator, function (err, result) {
		res.send(result.insertedId);
	});
});

api.param('donator', function (req, res, next, id) {
	Donators.findById(id, function (err, donator) {
		if (err) {
			res.status(500).send(err);
		} else if (!donator) {
			res.status(404).send('Donator not found');
		} else {
			req.donator = donator;
			next();
		}
	});
});

api.get('/:donator', function (req, res) {
	res.send(req.donator);
});

api.put('/:donator', function (req, res) {
	var donator = req.body;
	donator._id = req.donator._id;
	donator.ip = req.ip;
	Donators.update(donator, function (err, result) {
		res.send(result);
	});
});

api.delete('/:donator', function (req, res) {
	Donators.remove(req.donator, function (err) {
		res.send('removed');
	});
}); 

module.exports = api;

