const userRepository = require('../repositories/user.repository');

function _create(user, callback) {
	const response = userRepository.save(user, callback);
}

function getByEmail(email, callback) {
	const response = userRepository.get(email, callback);
}

module.exports = {
	create: _create,
	get: getByEmail
};