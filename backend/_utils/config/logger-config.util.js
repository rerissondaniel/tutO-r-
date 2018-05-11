const appRoot = require('app-root-path');
const winston = require('winston');

const MAX_LOG_SILE_SIZE = 5242880;// 5MB
const MAX_FILES = 5;

const options = {
	file: {
		level: 'info',
		filename: `${appRoot}/logs/app.log`,
		handleExceptions: true,
		json: true,
		maxsize: MAX_LOG_SILE_SIZE,
		maxFiles: MAX_FILES,
		colorize: false,
	},
	console: {
		level: 'info',
		handleExceptions: true,
		humanReadableUnhandledException: true,
		json: false,
		colorize: true,
	},
};

const logger = new winston.Logger({
	transports: [
		new winston.transports.File(options.file),
		new winston.transports.Console(options.console)
	],
	exitOnError: false,
});

/*eslint no-unused-vars: 0*/
logger.stream = {
	write: function (message, encoding) {
		logger.info(message);
	},
};

module.exports = logger;
