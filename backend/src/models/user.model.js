const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
	name: {
		type: String,
	},

	email: {
		type: String,
		required: true,
		unique: true
	},

	handles: [{
		judge: String,
		handle: String,
		_id: false
	}]
});

module.exports = mongoose.model('User', UserSchema);
