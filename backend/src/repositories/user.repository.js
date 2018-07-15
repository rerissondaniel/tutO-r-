const User = require('../models/user.model');

const logger = require('../utils/logger.util');
const mongoErrors = require('mongo-errors');

const errors = require('../utils/errors.util');
const messages = require('../utils/system-messages');

async function saveUser(user) {
	try {
		return await new User(user).save();
	} catch (error) {
		logger.info(`error while creating user: ${error.message}`);
		if (error.code === mongoErrors.DuplicateKey) {
			throw errors.conflict(messages.UserNotFound);
		}
		if(error.errors){
			throw errors.invalidData(messages.RequiredFieldNotPresent);
		}
		throw error;
	}
}

async function getByEmail(email) {
	try {
		return await User.findOne({email: email});
	} catch (error) {
		logger.info(`error while retrieving user: ${error.message}`);
		throw error;
	}
}

module.exports = {
	save: saveUser,
	get: getByEmail
};