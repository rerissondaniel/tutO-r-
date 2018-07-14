const userRepository = require('../repositories/user.repository');
const errors = require('../utils/errors.util');
const messages = require('../utils/system-messages');

async function _create(user) {
	return await userRepository.save(user);
}

async function _update(user, email){
	if(email !== user.email){
		throw errors.unauthorized(messages.Unauthorized);
	}
	return await userRepository.update(user);
}

async function getByEmail(email) {
	const user = await userRepository.get(email);
	if (!user) {
		throw errors.notFound(messages.UserNotFound);
	}
	return user;
}

module.exports = {
	create: _create,
	get: getByEmail,
	update: _update
};