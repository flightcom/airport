var DefaultApiRoutes = function(app, router, jwt) {

	// middleware to use for all requests
	router.use(function(req, res, next) {
	    // do logging
	    res.header("Access-Control-Allow-Origin", "*");
	    res.header("Access-Control-Allow-Headers", "origin, content-type, accept");
	    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
	    console.log('Requesting API route.');

		// check header or url parameters or post parameters for token
		var token = req.body.token || req.query.token || req.headers['x-access-token'];

		// decode token
		if (token) {

			// verifies secret and checks exp
			jwt.verify(token, app.get('superSecret'), function(err, decoded) {      
				if (err) {
					return res.json({ success: false, message: 'Failed to authenticate token.' });    
				} else {
					// if everything is good, save to request for use in other routes
					req.decoded = decoded;    
					next();
				}
			});

		} else {
			// if there is no token
			// return an error
			// return res.status(403).send({ 
			// 	success: false, 
			// 	message: 'No token provided.' 
			// });
			return res.redirect('/login');

		}


	});


}

module.exports = DefaultApiRoutes;