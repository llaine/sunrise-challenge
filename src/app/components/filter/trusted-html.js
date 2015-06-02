/**
 * Created by louis on 02/06/15.
 */

'use strict';

var app = angular.module("ngSunriseChallenge");


app.filter('trusted', ['$sce', function ($sce) {
    return function (text) {
        return $sce.trustAsHtml(text);
    }
}]);