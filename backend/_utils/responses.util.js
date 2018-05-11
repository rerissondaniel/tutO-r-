const httpStatusCodes = require('http-status-codes');

//Add responses here as you need them

function _created(res, data, message) {
	res.statusMessage = message;
	return res.status(httpStatusCodes.CREATED).json(data);
}

function _badRequest(res, data, message) {
	res.statusMessage = message;
	return res.status(httpStatusCodes.BAD_REQUEST);
}

function _ok(res, data, message) {
	res.statusMessage = message;
	return res.status(httpStatusCodes.OK).json(data);
}

function _internalError(res) {
	return res.status(httpStatusCodes.INTERNAL_SERVER_ERROR);
}

module.exports = {
	created: _created,
	badRequest: _badRequest,
	ok: _ok,
	internalError: _internalError
};