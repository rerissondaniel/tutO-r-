const _CODES = {
	INVALID_DATA: 1,
	NOT_FOUND: 2
};

function _invalidData(message) {
	const error = new Error(message);
	error.code = _CODES.INVALID_DATA;
	return error;
}

function _notFound(message) {
	const error = new Error(message);
	error.code = _CODES.NOT_FOUND;
	return error;
}

module.exports = {
	CODES: _CODES,
	invalidData: _invalidData,
	notFound: _notFound
};