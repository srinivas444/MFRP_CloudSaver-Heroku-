(function(){
	'use strict';

	angular.module('app')
		.controller('SetPasswordCtrl', [
			'$scope',
			'$state',
			function($scope, $state) {
					$scope.setpassword = function() {
						if($scope.newpassword === $scope.confirmpassword){
							
							$state.go('login');
							
						}
						else{
							$scope.msg = "password doesn't match";
						}
					};
			}
		]);
})();