/**
 * sunrise
 *
 * @user llaine
 * @date 05/03/15
 */

'use strict';

angular.module('ngSunriseChallenge')
    .controller('homeController', ['$scope', 'DigitalSquare', 'BookMarksService', function($scope, DigitalSquare, BookMarksService) {

        DigitalSquare.query().then(function (resultat) {
            $scope.events = resultat.data.events;
        });
        
        
        $scope.bookmarkEvent = function (name, end_at, description, address, city) {

            var eventFormated = {
                id:new Date().getTime(),
                name:name,
                date:end_at,
                description:description,
                address:address,
                city:city
            };

            BookMarksService.add(eventFormated);

        }

    }]);