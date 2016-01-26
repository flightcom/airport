module.directive('aircraftItem', ['AirportService', function(AirportService){
	return {
		restrict: 'E',
		scope: {
			aircraft: '='
		},
		template: '<div class="col-xs-4"><span>{{aircraft.name}}</span>' +
			'<button class="btn btn-primary" ng-click="takeAircraft()">Je pars !</button>' +
			'</div>',
		controller: ['$scope', function($scope) {
			$scope.takeAircraft = function() {
				AirportService.takeAircraft($scope.aircraft);
			}
		}]
	}
}]);