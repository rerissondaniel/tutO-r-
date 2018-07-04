const userService = require('../services/user.service');
const User = require('../models/user.model');

function _create(req, res) {
	const user = new User(req.body);
  
	userService.create(user, (response) => {
		res.contentType('application/json');
		res.send(response);
	});
}

function _get(req, res) {
	const authString = req.headers['authorization'];
	const userEmail = authString.split(' ')[1];

	userService.get(userEmail, (response) => {
		res.contentType('application/json');
		res.send(response);
	});
}

module.exports = {
	create: _create,
	get: _get
};