const User = require('../../../src/models/user.model');

async function _removeAll() {
	await User.remove();
}

module.exports = {
	removeAll: _removeAll
};