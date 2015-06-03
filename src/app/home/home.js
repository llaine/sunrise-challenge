/**
 * sunrise
 *
 * @user llaine
 * @date 05/03/15
 */

'use strict';

angular.module('ngSunriseChallenge')
    .controller('homeController', ['$scope', 'DigitalSquare', function($scope, DigitalSquare) {

        DigitalSquare.query().then(function (resultat) {
            $scope.events = resultat.data.events;
        });

    }]);