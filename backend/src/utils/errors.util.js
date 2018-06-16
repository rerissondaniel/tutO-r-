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
	NOT_FOUND: 2
};

/**
 * Creates an invalid data error.
 * @param {string} message The message of the error.
 * @returns {Error} an invalid data error.
 */
function _invalidData(message) {
	const error = new Error(message);
	error.code = _CODES.INVALID_DATA;
	return error;
}


/**
 * Creates a not found error.
 * @param {string} message The message of the error.
 * @returns {Error} a not found error.
 */
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