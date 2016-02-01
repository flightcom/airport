var DefaultRoutes = function(router) {

	// middleware to use for all requests
	router.use(function(req, res, next) {
	    // do logging
	    res.header("Access-Control-Allow-Origin", "*");
	    res.header("Access-Control-Allow-Headers", "origin, content-type, accept");
	    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
	    console.log('Something is happening.');
	    next(); // make sure we go to the next routes and don't stop here
	});

	// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
	router.get('/', function(req, res) {
	    res.json({ message: 'hooray! welcome to our api!' });   
	});

}

module.exports = DefaultRoutes;