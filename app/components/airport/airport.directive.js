module.directive('airportItem', ['AirportService', function(AirportService){
	return {
		restrict: 'E',
		scope: {
			airport: '='
		},
		template: '<div class="col-xs-4"><span>{{airport.name}}</span>' +
			'<form ng-submit="update()"><input value="{{airport.oaciCode}}"></form>' +
			'<input type="text" value="{{airport.updatedAt}}" readonly>' +
			'<button class="btn btn-primary" ng-click="update()">MAJ</button>' +
			'</div>',
		controller: ['$scope', function($scope) {
			$scope.update = function() {
				$scope.airport.$save();
				$scope.airport.query();
			}
		}]
	}
}]);