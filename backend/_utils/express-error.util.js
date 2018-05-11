const responses = require('./responses.util');

const errors = require('./errors.util');
const CODES = errors.CODES;

function _toResponse(res, error) {
	switch (error.code) {
		case CODES.INVALID_DATA: {
			return responses.badRequest(res, error.message);
		}
		default:{
			return responses.internalError(res, error.message);
		}
	}
}

module.exports = {
	toResponse: _toResponse
};