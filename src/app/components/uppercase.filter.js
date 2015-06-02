/**
 * Created by louis on 02/06/15.
 */

'use strict';

var app = angular.module("ngSunriseChallenge");


app.filter('uppercase', function () {
    return function (text) {
        if(text){
            return text.toUpperCase();
        }
    }
});