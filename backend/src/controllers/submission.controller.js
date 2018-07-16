const messages = require('../utils/system-messages');
const submissionService = require('../services/submission.service');
const responses = require('../utils/express/responses.util');
const errorUtil = require('../utils/express/express-error.util');

async function _getAll(req, res) {
	const userId = req.userId;
	const handle = req.params.handle;
	try {
		const submissions = await submissionService.getAllSubmissions(userId, handle);
		return responses.ok(res, submissions, messages.UserCreated);
	} catch (error) {
		return errorUtil.toResponse(res, error);
	}
}

module.exports = {
	get: _getAll
};