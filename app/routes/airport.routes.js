Airport = require('../models/airport.model.js');

var AirportRoutes = function(router) {

    router.route('/airports')

        // create a airport (accessed at POST http://localhost:8080/api/airports)
        .post(function(req, res) {
            
            var airport = new Airport();      // create a new instance of the Airport model
            airport.name = req.body.name;
            airport.oaciCode = req.body.oaciCode;
            airport.createdAt = new Date();
            airport.updatedAt = airport.createdAt;
            console.log('in post', airport);

            // save the airport and check for errors
            airport.save(function(err) {
                if (err) {
                    res.send(err);
                    console.log('ERROR !');
                }

                res.json({ message: 'Airport created!' });
            });
            
        })

        // get all the airports (accessed at GET http://localhost:8080/api/airports)
        .get(function(req, res) {
            console.log('in get', Airport);
            Airport.find(function(err, airports) {
                if (err) {
                    res.send(err);
                    console.log('error get');
                }
                else 
                    console.log('else get');

                res.json(airports);
            });
            console.log('end get');
        });

    router.route('/airports/:airport_id')

        // get the airport with that id (accessed at GET http://localhost:8080/api/airports/:airport_id)
        .get(function(req, res) {
            Airport.findById(req.params.airport_id, function(err, airport) {
                if (err)
                    res.send(err);
                res.json(airport);
            });
        })

        // update the airport with this id (accessed at PUT http://localhost:8080/api/airports/:airport_id)
        .put(function(req, res) {

            // use our airport model to find the airport we want
            Airport.findById(req.params.airport_id, function(err, airport) {

                if (err)
                    res.send(err);

                airport.name = req.body.name;
                airport.oaciCode = req.body.oaciCode;
                airport.updatedAt = new Date();

                // save the airport
                airport.save(function(err) {
                    if (err)
                        res.send(err);

                    res.json({ message: 'Airport updated!' });
                });

            });
        })

        // delete the airport with this id (accessed at DELETE http://localhost:8080/api/airports/:airport_id)
        .delete(function(req, res) {
            Airport.remove({
                _id: req.params.airport_id
            }, function(err, airport) {
                if (err)
                    res.send(err);

                res.json({ message: 'Successfully deleted' });
            });
        });

}

module.exports = AirportRoutes;
