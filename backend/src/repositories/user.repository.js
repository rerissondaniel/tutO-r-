const User = require('../models/user.model');

function saveUser(user, callback) {
	var response = {};
  
	user.save(function(err) {
		if (err) {
			response.message = err.message;
			//11000: MongoError's duplicated key
			response.status = err.code == 11000 ? 409 : 500;
		} else {
			response.status = 201; //HTTP created code
		}
		callback(response);
	});
}

function _get(userName) {
	return User.findOne({name: userName});
}

function getByEmail(email, callback) {
	var response = {};
	User.findOne({email: email}, function(err, doc) {
		if(err) {
			response.status = 500;
		} else if(doc) {
			response.data = doc;
			response.status = 200;
		} else {
			response.status = 400;
		}
		callback(response);
	});
}

module.exports = {
	save: saveUser,
	get: getByEmail
};