module.directive('authItem', ['AuthenticationService', function(AuthenticationService){
	return {
		restrict: 'E',
		scope: {
			user: '='
		},
		templateUrl: 'authentication.html',
		controller: ['$scope', function($scope) {
			$scope.submit = function() {
				$scope.user.$get();
			}
		}]
	}
}]);