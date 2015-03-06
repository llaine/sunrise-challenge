/**
 * sunrise
 *
 * The calendar directive.
 * Represent the multi-day week view.
 *
 * @user llaine
 * @date 06/03/15
 */

'use strict';

var app = angular.module('ngSunriseChallenge');

app.directive('calendarView', function () {
    return {
        restrict: 'AE',
        transclude: true,
        scope: {},
        templateUrl: 'components/directives/template/calendarView.html',
        link: function (scope, element) {

        }
    }
});