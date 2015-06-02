/**
 * Created by louis on 02/06/15.
 */

var app = angular.module("ngSunriseChallenge");


app.directive('watch', ['$interval', function ($interval) {
    return {
        restrict:'AE',
        template:'<p> Il est : {{ heure }} </p>',
        link: function (scope, element, attrs, ctrl) {

            $interval(function () {
                var date = new Date();
                var heure = date.getHours();
                var minutes = date.getMinutes();
                var secondes = date.getSeconds();

                scope.heure = heure + ":" + minutes + ":" + secondes;

            }, 1000);
        }
    }
}]);