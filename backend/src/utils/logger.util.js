
const logger = require('./config/logger-config.util');

function _info(msg, obj) {
	_logWithObj(logger.info, obj, msg);
}

function _error(msg, obj) {
	_logWithObj(logger.error, obj, msg);
}

function _logWithObj(fn, obj, msg) {
	if (obj != null) {
		fn(`${msg}: ${JSON.stringify(obj, null, '\t')}`);
	} else {
		fn(`${msg}`);
	}
}

module.exports = {
	info: _info,
	error: _error
};