const tagRepository = require('../repositories/database/tag.repository');

async function _findOrCreate(tag) {
	const found = await tagRepository.find(tag);
	if (found) {
		return found;
	}

	return tagRepository.create(tag);
}

module.exports = {
	findOrCreate: _findOrCreate
};