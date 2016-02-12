var module = angular.module('Airport', ['ngResource']);

module.controller('AirportCtrl', ['$scope', '$resource', 'AirportService', function($scope, $resource, AirportService){
	$scope.airports = AirportService.query();
}]);

module.controller('LoginCtrl', ['$scope', '$resource', 'AuthenticationService', function($scope, $resource, AuthenticationService){
}]);

