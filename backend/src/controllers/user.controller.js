const errorUtil = require('../utils/express-error.util');
const userService = require('../services/user.service');
const responses = require('../utils/responses.util');
const messages = require('../utils/system-messages');

async function _create(req, res) {
	const user = req.body;

	try {
		const created = await userService.create(user);
		return responses.created(res, created, messages.UserCreated);
	} catch (error) {
		return errorUtil.toResponse(res, error);
	}
}

async function _get(req, res) {
	const authString = req.headers['authorization'];
	const email = authString.split(' ')[1];

	try {
		const user = await userService.get(email);
		return responses.ok(res, user);
	} catch (error) {
		return errorUtil.toResponse(res, error);
	}
}

module.exports = {
	create: _create,
	get: _get
};