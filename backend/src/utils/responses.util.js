const httpStatusCodes = require('http-status-codes');

//Add responses here as you need them

function _created(res, data, message) {
	res.statusMessage = message;
	return res.status(httpStatusCodes.CREATED).json(data);
}

function _badRequest(res, data, message) {
	res.statusMessage = message;
	return res.status(httpStatusCodes.BAD_REQUEST).send();
}

function _ok(res, data, message) {
	res.statusMessage = message;
	return res.status(httpStatusCodes.OK).json(data);
}

function _conflict(res, message) {
	res.statusMessage = message;
	return res.status(httpStatusCodes.CONFLICT).send();
}

function _notFound(res, message) {
	res.statusMessage = message;
	return res.status(httpStatusCodes.NOT_FOUND).send();
}

function _internalError(res) {
	return res.status(httpStatusCodes.INTERNAL_SERVER_ERROR).send();
}

module.exports = {
	created: _created,
	badRequest: _badRequest,
	ok: _ok,
	conflict: _conflict,
	notFound: _notFound,
	internalError: _internalError,
};