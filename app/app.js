var module = angular.module('Airport', ['ngResource']);

module.controller('AirportCtrl', ['$scope', '$resource', 'Airport', function($scope, $resource, Airport){
	$scope.airports = Airport.query();
}]);

