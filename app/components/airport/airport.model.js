var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

// create a schema
var AirportSchema = new Schema({
  name: String,
  created_at: Date,
  updated_at: Date
});

// the schema is useless so far
// we need to create a model using it
var Airport = mongoose.model('Airport', AirportSchema);

// make this available to our users in our Node applications
module.exports = Airport;