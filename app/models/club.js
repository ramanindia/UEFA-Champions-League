
//app/models/user.js
//load the things we need
var mongoose = require('mongoose');

//define the schema for our user model
var clubSchema = mongoose.Schema({	
	club: String,
	country: String,
	color:String,
	logo:String
});

//create the model for users and expose it to our appn
module.exports = mongoose.model('clubs', clubSchema);