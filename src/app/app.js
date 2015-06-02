/**
 * sunrise
 *
 * @user llaine
 * @date 05/03/15
 */

'use strict';


angular.module('ngSunriseChallenge', ['ngRoute'])
    /* Routing */
    .config(['$routeProvider', function($routeProvider) {

        $routeProvider.when('/', {
            templateUrl: 'app/home/home.html',
            controller: 'homeController'
        }).when('/bookmarks', {
            templateUrl: 'app/bookmarks/bookmarks.html',
            controller: 'bookmarksController'
        }).otherwise( '/' );

    }]);