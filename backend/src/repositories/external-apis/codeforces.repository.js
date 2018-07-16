const request = require('request-promise');
const logger = require('../../utils/logger.util');
const httpErrors = require('http-status-codes');
const errors = require('../../utils/errors.util');
const messages = require('../../utils/system-messages');

const INTERVALS = {
	ALL: {from: 1, to: 500000},
	FIRST_TEN: {from: 1, to: 10}
};

async function _getFrom(handle, fromId) {
	let submissions = [];
	let found = false;

	for (let i = 0; !found; i += 10) {
		const options = _buildOptions(handle, i + 1, i + INTERVALS.FIRST_TEN.to);
		const result = await _doGet(options);
		for (const sub of result) {
			if (sub.externalId !== fromId) {
				submissions.push(sub);
			} else {
				found = true;
				break;
			}
		}
	}

	return submissions;
}

async function _getAll(handle) {
	const options = _buildOptions(handle, INTERVALS.ALL.from, INTERVALS.ALL.to);
	return await _doGet(options);
}

async function _doGet(options) {
	try {
		const response = await request(options);
		return JSON.parse(response).result.map(_extractSubmission);
	} catch (error) {
		if (error.statusCode === httpErrors.BAD_REQUEST) {
			throw errors.notFound(messages.HandleNotFound);
		}
		logger.error('error while communicating with codeforces', error);
		throw error;
	}
}

function _buildOptions(handle, from, to) {
	return {
		method: 'GET',
		uri: `https://codeforces.com/api/user.status?handle=${handle}&from=${from}&count=${to}`
	};
}

function _extractSubmission(data) {
	return {
		type: data.author.participantType,
		verdict: data.verdict,
		tags: data.problem.tags.map(tag => {
			return {tag: tag};
		}),
		programmingLanguage: data.programmingLanguage,
		externalId: String(data.id),
		source: 'codeforces'
	};
}

module.exports = {
	getAll: _getAll,
	getFrom: _getFrom
};