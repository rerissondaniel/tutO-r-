const Tag = require('../../models/tag.model');
const logger = require('../../utils/logger.util');

function _find(tag) {
	try {
		return Tag.findOne({'tag': tag.tag});
	} catch (error) {
		logger.error('error finding tag', error);
		throw error;
	}
}

function _create(tag) {
	try {
		return new Tag(tag).save();
	} catch (error) {
		logger.error('error creating tag', error);
		throw error;
	}
}

module.exports = {
	find: _find,
	create: _create
};