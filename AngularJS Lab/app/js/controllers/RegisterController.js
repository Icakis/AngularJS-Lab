'use strict';

app.controller('RegisterController',
    function ($scope, $location, townsService, authService, notifyService) {
        $scope.userData = { townId: null };

        townsService.getTowns(function (towns) {
            $scope.towns = towns;
        }, function (error) {
            notifyService.showError("Load towns failed", error);
        });

        $scope.register = function (userData) {
            authService.register(userData,
                function success(data) {
                    notifyService.showInfo("Register successful");
                    $location.path('/');
                },
                function error(err) {
                    notifyService.showError("User registration failed", err);
                }
            );
        };
    }
);
