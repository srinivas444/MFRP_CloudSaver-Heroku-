(function(){
	'use strict';

	angular.module('app')
		.controller('SignupCtrl', [
			'$scope',
			'$state',
			function($scope, $state,$rootScope) {
				$rootScope.Background_color = true;
				$scope.setpassword = function() {
					$state.go('setpassword');
				};
			}
		]);
})();