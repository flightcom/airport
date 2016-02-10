// BASE SETUP
// =============================================================================
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var router     = express.Router();          // get an instance of the express Router
var morgan     = require('morgan');
var mongoose   = require('mongoose');
var jwt        = require('jsonwebtoken'); // used to create, sign, and verify tokens

var config = require('./config'); // get our config file
var User   = require('./app/models/user.model'); // get our mongoose model

// CONFIGURATION
// =============================================================================
var port = process.env.PORT || 8080;
mongoose.connect(config.database);
app.set('superSecret', config.secret); // secret variable
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));

// ROUTES FOR OUR API
// =============================================================================
// Public routes
require('./app/routes/routes.js')(app, router, jwt);
// Private routes
require('./app/routes/user.routes.js')(router);
require('./app/routes/airport.routes.js')(router);
// REGISTER OUR ROUTES
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
