const responses = require('../../utils/express/responses.util');
const messages = require('../../utils/system-messages');
const userService = require('../../services/user.service');
const errorUtil = require('../../utils/express/responses.util');

async function _authenticate(req, res, next) {
	const auth = req.headers['authorization'];
	let email = null;

	if (auth) {
		email = auth.split(' ')[1];
	}

	if (!email) {
		return responses.unauthorized(res, messages.Unauthorized);
	}

	try {
		const user = await userService.get(email);
		req.userEmail = email;
		req.userId = user.id;
		next();
	}catch(error){
		return errorUtil.notFound(res, error.message);
	}
}

module.exports = {
	authenticate: _authenticate
};
