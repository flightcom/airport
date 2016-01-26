var router = express.Router();

// on routes that end in /airports
// ----------------------------------------------------
var AirportRoutes = router.route('/airports')

    // create a airport (accessed at POST http://localhost:8080/api/airports)
    .post(function(req, res) {
        
        var airport = new Airport();      // create a new instance of the Airport model
        airport.name = req.body.name;  // set the airports name (comes from the request)

        // save the airport and check for errors
        airport.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Airport created!' });
        });
        
    })

    // get all the airports (accessed at GET http://localhost:8080/api/airports)
    .get(function(req, res) {
        Airport.find(function(err, airports) {
            if (err)
                res.send(err);

            res.json(airports);
        });
    });

router.route('/airprot/:airport_id')

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

            airport.name = req.body.name;  // update the airports info

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

module.exports = AirportRoutes;