/**
 * sunrise
 *
 * @user llaine
 * @date 05/03/15
 */

'use strict';


angular.module('ngSunriseChallenge')
    .controller('homeController', ['$scope', function($scope) {


        $scope.hours = [
            {hour: '12 PM', content:'test'},
            {hour: '1 PM', content:'test'},
            {hour: '2 PM', content:'test'},
            {hour: '3 PM', content:'test'},
            {hour: '4 PM', content:'test'},
            {hour: '5 PM', content:'test'},
            {hour: '6 PM', content:'test'},
            {hour: '7 PM', content:'test'},
            {hour: '9 PM', content:'test'},
            {hour: '10 PM', content:'test'},
            {hour: '11 PM', content:'test'}
        ];


        $scope.daysOfTheWeek = [
            {month: '7', dayNumber:'20', day:'Sun', currentDay: false},
            {month: '7', dayNumber:'21', day:'Mon', currentDay: true},
            {month: '7', dayNumber:'22', day:'Tue', currentDay: false},
            {month: '7', dayNumber:'23', day:'Wed', currentDay: false},
            {month: '7', dayNumber:'24', day:'Thu', currentDay: false},
            {month: '7', dayNumber:'25', day:'Fri', currentDay: false},
            {month: '7', dayNumber:'26', day:'Sat', currentDay: false}
        ];


    }]);