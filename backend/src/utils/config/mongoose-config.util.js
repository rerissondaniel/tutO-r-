const mongoose = require('mongoose');
const bluebird = require('bluebird');
const logger = require('../logger.util');

function _config(dbUrl) {
	mongoose.Promise = bluebird;

	mongoose.connect(`${dbUrl}`, {useNewUrlParser: true}).then(() => {
		logger.info(`Connected to database at :${dbUrl}`);
	}).catch(error => {
		logger.error(`Couldn't connect to database at : ${dbUrl}\n`, error);
	});
}

module.exports = {
	config: _config
};