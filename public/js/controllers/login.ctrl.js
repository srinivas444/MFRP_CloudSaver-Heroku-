(function() {
    'use strict';

    angular.module('app')
        .controller('LoginCtrl', [
            '$scope',
            '$state',
            '$rootScope',
            function($scope, $state, $rootScope) {
            
                var logged_users = [{
                        "id": "user1",
                        "user_name": "first@gmail.com",
                        "pass": "first"
                    },
                    {
                        "id": "user2",
                        "user_name": "second@gmail.com",
                        "pass": "second"
                    }
                ];
                $rootScope.Background_color = true;
                var flag = 0;
                $scope.login = function(username, password) {
                    angular.forEach(logged_users, function(val) {
                        if (val.user_name === username && val.pass === password) {
                            $state.go('home');
                            flag = 1;
                        }
                    });
                    if (flag == 0) {
                        $scope.msg = "There was problem with your Login"
                    }

                };
            }
        ]);
})();