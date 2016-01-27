var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

// create a schema
var AirportSchema = new Schema({
	name: String,
	oaci_code: String,
	coordinates: [String, String], 
	created_at: Date,
	updated_at: Date
});

// make this available to our users in our Node applications
module.exports = mongoose.model('Airport', AirportSchema);