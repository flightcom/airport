// BASE SETUP
// =============================================================================

var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// ROUTES
require('./app/components/routes.js')(router);
require('./app/components/airport/airport.routes.js')(router);

// REGISTER OUR ROUTES -------------------------------
app.use('/api', router);

// CONNECT TO DABATASE
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/airports'); // connect to our database

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);