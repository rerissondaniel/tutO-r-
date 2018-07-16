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

	submissions = submissions.reverse();

	for (const sub of submissions) {
		sub.user = userId;
		sub.tags = await Promise.all(sub.tags.map(tag => tagService.findOrCreate(tag)));
		await submissionsRepo.save(sub);
	}
}

async function _getAllSubmissions(userId, handle) {
	await _updateUserSubmissions(userId, handle);
	return submissionsRepo.getAll(userId);
}

module.exports = {
	updateUserSubmissions: _updateUserSubmissions,
	getAllSubmissions: _getAllSubmissions
};