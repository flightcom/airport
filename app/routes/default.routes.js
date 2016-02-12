var DefaultRoutes = function(app, router, jwt) {

	// middleware to use for all requests
	router.use(function(req, res, next) {
	    // do logging
	    console.log('Requesting PUBLIC route');
		next();

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