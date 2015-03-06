/**
 * sunrise
 *
 * The navigation bar directive.
 * Represent the navigation bar which embed all the date.
 * (Tue 7/22, Wed 7/23, etc ...)
 *
 * @user llaine
 * @date 06/03/15
 */

'use strict';

var app = angular.module('ngSunriseChallenge');

app.directive('navigationBar', function () {
        return {
            restrict: 'AE',
            transclude: true,
            scope: {},
            templateUrl: 'components/directives/template/navigationBar.html',
            link: function (scope, element) {

            }
        }
    });