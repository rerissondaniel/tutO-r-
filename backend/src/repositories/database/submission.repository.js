const Submission = require('../../models/submission.model');
const logger = require('../../utils/logger.util');

async function _save(submission) {
	try {
		return await new Submission(submission).save();
	} catch (error) {
		logger.error('internal error while saving user submission', error);
		throw error;
	}
}

async function _getLastSaved(userId) {
	try {
		return await Submission.findOne({'user': userId}).sort({'createdAt': -1}).limit(1);
	} catch (error) {
		logger.error('internal error while retrieving user submission', error);
		throw error;
	}
}

async function _getAll(userId) {
	try {
		return await Submission.find({'user': userId});
	} catch (error) {
		logger.error('internal error while retrieving user submissions', error);
		throw error;
	}
}

module.exports = {
	getAll: _getAll,
	save: _save,
	getLastSaved: _getLastSaved
};