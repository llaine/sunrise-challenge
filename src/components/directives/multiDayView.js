/**
 * sunrise
 *
 * @user llaine
 * @date 09/03/15
 */

'use strict';

var app = angular.module('ngSunriseChallenge');

app.directive('multiDayView', ['DomManipulator', function (DomManipulator) {
    return {
        restrict: 'AE',
        transclude: true,
        templateUrl: 'components/directives/template/multiDayView.html',
        link: function (scope, element, attr) {

            DomManipulator.domReady(function () {
                /* Apply click event to all the tag which have .cell as className */
                DomManipulator.addEventListenerList('cell', 'click',
                    /* This function is applied to every cell on click */
                    function (e) {
                        console.log(e);
                        console.log(this);
                        DomManipulator.createEvent(this, {top: e.clientY, left: e.clientX}, 'Title test!');


                    }
                );
            });

        }
    }
}]);



