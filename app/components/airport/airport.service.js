module.factory('AirportService', function() {

	return {
		getAircrafts: function() {
			return [
				{name: 'A320', company: 'Air France'},
				{name: 'B737', company: 'Delta Airlines'}
			]
		},
		takeAircraft: function(aircraft) {
			alert('Bon vol sur la compagnie ' + aircraft.company + ' !');
		}
	}

});