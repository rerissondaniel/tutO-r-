const logger = require('../utils/logger.util');
const userRepository = require('../repositories/user.repository');
const errorUtil = require('../utils/errors.util');

async function _create(user) {
	try {
		return await userRepository.create(user);
	} catch (error) {
		logger.info(error);
		throw _processError(error);
	}
}

async function _get(username) {
	const user = await userRepository.get(username);
	if (!user){
		throw errorUtil.notFound('USER_NOT_FOUND');
	}
	return user;
}

function _processError(error) {
	//add bussiness error verification here, if needed
	throw error;
}

module.exports = {
	create: _create,
	get: _get
};