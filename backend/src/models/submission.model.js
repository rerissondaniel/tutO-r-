const mongoose = require('mongoose');
const autopopulate = require('mongoose-autopopulate');

const SubmissionSchema = new mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	},
	externalId: String,
	type: String,
	verdict: String,
	programmingLanguage: String,
	source: String,

	tags: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Tag',
		autopopulate: true
	}],
}, {
	timestamps: {
		createdAt: 'createdAt'
	}
});

SubmissionSchema.plugin(autopopulate);

module.exports = mongoose.model('Submission', SubmissionSchema);
