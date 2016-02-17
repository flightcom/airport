// BASE SETUP
// =============================================================================
var express    = require('express');        // call express
var bodyParser = require('body-parser');
var app        = express();                 // define our app using express
var router     = express.Router();          // get an instance of the express Router
var router_api = express.Router();          // get an instance of the express Router
var morgan     = require('morgan');
var mongoose   = require('mongoose');
var jwt        = require('jsonwebtoken'); // used to create, sign, and verify tokens

var config = require('./config'); // get our config file
var User   = require('./app/models/user.model'); // get our mongoose model

// CONFIGURATION
// =============================================================================
var port = process.env.PORT || 8080;
mongoose.connect(config.database);
app.set('view engine', 'ejs');
app.set('superSecret', config.secret); // secret variable
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));

// ROUTES FOR OUR API
// =============================================================================
// Public routes
require('./app/routes/default.routes')(app, router, jwt);
// Private routes
require('./app/routes/api.default.routes')(app, router_api, jwt);
require('./app/routes/user.routes')(router_api);
require('./app/routes/airport.routes')(router_api);
// REGISTER OUR ROUTES
app.use('/', router);
app.use('/api', router_api);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
