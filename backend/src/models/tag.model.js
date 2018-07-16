const mongoose = require('mongoose');

const TagSchema = new mongoose.Schema({
	tag: String,
});

module.exports = mongoose.model('Tag', TagSchema);
