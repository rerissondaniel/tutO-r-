const User = require('../_models/user.model');

async function _create(user) {
	try {
		return await new User(user).save();
	} catch (error) {
		const errors = error.errors;
		if (errors['name'].kind === 'required') {
			throw errors.invalidData('user_name_required');
		}
	}
}

function _get(userName) {
	return User.findOne({name: userName});
}

module.exports = {
	create: _create,
	get: _get
};