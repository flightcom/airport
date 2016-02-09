// BASE SETUP
// =============================================================================

var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var router     = express.Router();          // get an instance of the express Router

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
// ROUTES
require('./app/routes/routes.js')(router);
require('./app/routes/airport.routes.js')(router);
// REGISTER OUR ROUTES
app.use('/api', router);

// CONNECT TO DABATASE
var mongoose = require('mongoose');
mongoose.connect("mongodb://node:node@apollo.modulusmongo.net:27017/hI4jyvat", function(err) { if (err) console.log(err); });

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
