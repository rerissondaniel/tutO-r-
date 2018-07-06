module.exports = {
	baseUrl: '/api'
};

const logger =  require('../../src/utils/config/logger-config.util');

before(() => {
	//Disable logger
	logger.transports['console'].silent = true;
});