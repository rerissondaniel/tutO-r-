const responses = require('../_utils/responses.util');
const userService = require('../_services/user.service');
const errorUtil = require('../_utils/express-error.util');

async function _create(req, res) {
	const user = {
		name: req.body.name
	};
	try {
		const created = await userService.create(user);
		return responses.created(res, created);
	} catch (error) {
		return errorUtil.toResponse(res, error);
	}
}

async function _get(req, res) {
	const userName = req.params.name;
	try {
		const user = await userService.get(userName);
		return responses.ok(res, user);
	} catch (error) {
		return errorUtil.toResponse(res, error);
	}
}

module.exports = {
	create: _create,
	get: _get
};