User = require('../models/user.model.js');

var UserRoutes = function(router) {

    router.route('/users')

        // get all the airports (accessed at GET http://localhost:8080/api/airports)
        .get(function(req, res) {
            User.find(function(err, users) {
                if (err)
                    res.send(err);

                res.json(users);
            });

        });

}

module.exports = UserRoutes;
