/**
 * Created by louis on 02/06/15.
 */


'use strict';


angular.module('ngSunriseChallenge')
    .controller('bookmarksController', ['$scope', 'BookMarksService', function($scope, BookMarksService) {

        $scope.bookmarkedEvents = BookMarksService.query();

    }]);