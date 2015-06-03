/**
 * Created by louis on 03/06/15.
 */



var app = angular.module("ngSunriseChallenge");


app.directive('btnBookmark', ['BookMarksService', function (BookMarksService) {
    return {
        restrict:'E',
        scope: {
            'event':'=',
            'venue':'='
        },
        template:'<button ng-show="isBookmarked" disabled>Already in favs</button>' +
                '<button ng-show="!isBookmarked" ng-click="bookmarkEvent(event.name, event.end_at, event.description, venue.address, venue.city); isBookmarked=true" >Add to favorites</button>',
        link: function (scope, element, attrs, ctrl) {

            /* ON attend que l'attribue soit évalué par le $digest d'angular */
            scope.$watch('event', function (newVal) {
                attrs.event = newVal;
                scope.isBookmarked = BookMarksService.isBookmarked(newVal.name);
            });

            scope.$watch('venue', function(newVal){
                attrs.venue = newVal;
            });

            /**
             * La fonction qui ajoute un nouvel event au bookmark.
             * @param name
             * @param date
             * @param description
             * @param address
             * @param city
             */
            scope.bookmarkEvent = function (name, date, description, address, city) {
                BookMarksService.add({
                    name:name,
                    date:date,
                    description:description,
                    address:address,
                    city:city
                });
            }

        }
    }
}]);