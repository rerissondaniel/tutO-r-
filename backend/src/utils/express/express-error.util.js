/**
 * Used in controllers layer to converts an app error to an adequate
 * response with proper status and message.
 * @module util/express-errors
 * @see util/app-errors
 */
const responses = require('./responses.util');

const errors = require('../errors.util');
const logger = require('../logger.util');

const CODES = errors.CODES;


/**
 * Converts an application error to an express response with proper status and message.
 * @param {Response} res the express response that will carry the error.
 * @param {Error} error The error to be converted.
 * @returns {Response} a express response with adequate status and message.
 */
function _toResponse(res, error) {
	switch (error.code) {
		case CODES.INVALID_DATA: {
			return responses.badRequest(res, error.message);
		}
		case CODES.CONFLICT: {
			return responses.conflict(res, error.message);
		}
		case CODES.NOT_FOUND: {
			return responses.notFound(res, error.message);
		}
		default: {
			logger.error(`Internal error: ${error}`);
			return responses.internalError(res, error.message);
		}
	}
}

module.exports = {
	toResponse: _toResponse
};