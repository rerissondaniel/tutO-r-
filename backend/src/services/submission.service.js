const submissionsRepo = require('../repositories/database/submission.repository');
const codeforces = require('../repositories/external-apis/codeforces.repository');
const tagService = require('./tag.service');

async function _updateUserSubmissions(userId, handle) {
	let submissions;
	const lastSaved = await submissionsRepo.getLastSaved(userId);

	if (lastSaved) {
		submissions = await codeforces.getFrom(handle, lastSaved.externalId);
	} else {
		submissions = await codeforces.getAll(handle);
	}

	for (const sub of submissions) {
		sub.user = userId;
		sub.tags = await Promise.all(sub.tags.map(tag => tagService.findOrCreate(tag)));
	}

	return await Promise.all(
		submissions.map(sub => submissionsRepo.save(sub))
	);
}

async function _getAllSubmissions(userId, handle) {
	await _updateUserSubmissions(userId, handle);
	return submissionsRepo.getAll(userId);
}

module.exports = {
	updateUserSubmissios: _updateUserSubmissions,
	getAllSubmissions: _getAllSubmissions
};