/**
 * Created by louis on 02/06/15.
 */


var app = angular.module('ngSunriseChallenge');


app.service('DigitalSquare', ['$http', '$q', function ($http, $q) {

    function getAll() {
        var defer = $q.defer();

        defer.resolve($http.get('https://digisquare.net/events.json'));

        return defer.promise;
    }

    return {
        query:getAll
    }
}]);