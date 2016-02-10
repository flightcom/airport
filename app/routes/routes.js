var DefaultRoutes = function(app, router, jwt) {

	// middleware to use for all requests
	router.use(function(req, res, next) {
	    // do logging
	    res.header("Access-Control-Allow-Origin", "*");
	    res.header("Access-Control-Allow-Headers", "origin, content-type, accept");
	    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
	    console.log('Something is happening.');

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
			return res.status(403).send({ 
				success: false, 
				message: 'No token provided.' 
			});

		}


	});

	// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
	router.get('/', function(req, res) {
	    res.json({ message: 'hooray! welcome to our api!' });   
	});

	// Setup default user
	router.get('/setup', function(req, res) {

		// create a sample user
		var user = new User({ 
			name: 'Sébastien Moreau', 
			password: '090585',
			admin: true 
		});

		// save the sample user
		user.save(function(err) {
			if (err) throw err;
			console.log('User saved successfully');
			res.json({ success: true });
		});

	});

	// Route to authenticate a user (POST http://localhost:8080/api/authenticate)
	router.post('/authenticate', function(req, res) {

		// find the user
		User.findOne({
			name: req.body.name
		}, function(err, user) {

	    	if (err) throw err;

			if (!user) {
				res.json({ success: false, message: 'Authentication failed. User not found.' });
			} else {
				// check if password matches
				if (user.password != req.body.password) {
					res.json({ success: false, message: 'Authentication failed. Wrong password.' });
				} else {
			        // if user is found and password is right
			        // create a token
					var token = jwt.sign(user, app.get('superSecret'), {
						expiresInMinutes: 60 // expires in 24 hours
					});

					// return the information including token as JSON
					res.json({
						success: true,
						message: 'Enjoy your token!',
						token: token
					});
				}   

		    }

		});
	});

}

module.exports = DefaultRoutes;