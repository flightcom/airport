module.factory('AirportService', ['$resource', function($resource) {

	return $resource('http://localhost:8080/api/airports/:airportId', {airportId:'@_id'}, 
		{
			'query': {method: 'GET', isArray: true },
			'get': {method: 'GET' },
			'save': {method: 'PUT'}
		}
	);

}]);