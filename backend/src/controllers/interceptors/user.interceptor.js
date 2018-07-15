const responses = require('../../utils/express/responses.util');
const messages = require('../../utils/system-messages');
const userService = require('../../services/user.service');

async function _authenticate(req, res, next) {
	const auth = req.headers['authorization'];
	let email = null;

	if (auth) {
		email = auth.split(' ')[1];
	}

	const user = await userService.get(email);

	if (!email || !user) {
		return responses.unauthorized(res, messages.Unauthorized);
	}

	req.userEmail = email;
	req.userId = user.id;
	next();
}

module.exports = {
	authenticate: _authenticate
};
