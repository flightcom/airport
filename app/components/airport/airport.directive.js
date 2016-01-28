module.directive('airportItem', ['Airport', function(Airport){
	return {
		restrict: 'E',
		scope: {
			airport: '='
		},
		template: '<div class="col-xs-4"><span>{{airport.name}}</span>' +
			'<button class="btn btn-primary">J\'y vais !</button>' +
			'</div>',
		controller: ['$scope', function($scope) {}]
	}
}]);