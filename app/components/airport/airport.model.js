var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

// create a schema
var AirportSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	oaciCode: {
		type: String,
		required: true
	},
	coordinates: [String, String], 
	createdAt: Date,
	updatedAt: Date
});

// make this available to our users in our Node applications
module.exports = mongoose.model('Airport', AirportSchema);