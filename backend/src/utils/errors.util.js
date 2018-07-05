/**
 * Used for errors creation in service and repositories layer.
 * @module util/app-errors
 */

/**
 * Codes used for errors in the service and repositories layer.
 * @type {{INVALID_DATA: number, NOT_FOUND: number}}
 */
const _CODES = {
	INVALID_DATA: 1,
	NOT_FOUND: 2,
	CONFLICT: 3
};

/**
 * Creates an invalid data error.
 * @param {string} message The message of the error.
 * @returns {Error} an invalid data error.
 */
function _invalidData(message) {
	return _buildError(message, _CODES.INVALID_DATA);
}

/**
 * Creates a not found error.
 * @param {string} message The message of the error.
 * @returns {Error} a not found error.
 */
function _notFound(message) {
	return _buildError(message, _CODES.NOT_FOUND);
}

/**
 * Creates a not conflict error.
 * @param {string} message The message of the error.
 * @returns {Error} a not found error.
 */
function _conflict(message) {
	return _buildError(message, _CODES.CONFLICT);
}

function _buildError(message, code) {
	const error = new Error(message);
	error.code = code;
	return error;
}

module.exports = {
	CODES: _CODES,
	invalidData: _invalidData,
	notFound: _notFound,
	conflict: _conflict
};