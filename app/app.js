var module = angular.module('Airport', []);

module.controller('AirportCtrl', ['$scope', 'AirportService', function($scope, AirportService){
	$scope.aircrafts = AirportService.getAircrafts();
}]);

