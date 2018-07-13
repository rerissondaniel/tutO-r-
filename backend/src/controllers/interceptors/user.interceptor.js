const responses = require('../../utils/express/responses.util');
const messages = require('../../utils/system-messages');

function _authenticate(req, res, next) {
	const auth = req.headers['authorization'];
	let email = null;

	if (auth) {
		email = auth.split(' ')[1];
	}

	if (!email) {
		return responses.unauthorized(res, messages.Unauthorized);
	}

	req.userEmail = email;
	next();
}

module.exports = {
	authenticate: _authenticate
};
