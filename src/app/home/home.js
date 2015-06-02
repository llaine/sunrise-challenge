/**
 * sunrise
 *
 * @user llaine
 * @date 05/03/15
 */

'use strict';


angular.module('ngSunriseChallenge')
    .controller('homeController', ['$scope', function($scope) {

        $scope.name = "Jasmine";

        $scope.greet = function () {
            $scope.fullName = "Hello " + $scope.name;
        };


    }]);