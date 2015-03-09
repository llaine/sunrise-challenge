/**
 * sunrise
 *
 *
 *
 * DomManipulator class.
 * In order to have a "clean" code in the link directive function and as i
 * decided not to use jQuery.
 * I prefer put all the JS statement to manipulate dom in a jQuery class like.
 *
 * @user llaine
 * @date 09/03/15
 */

'use strict';

var app = angular.module('ngSunriseChallenge');

app.service('DomManipulator', ['$timeout', function ($timeout) {

    /**
     * Apply a function to an event for an HTMLCollection
     * @param className
     * @param event
     * @param fn
     */
    function addEventListenerList(className, event, fn){
        var list = document.getElementsByClassName(className);
        for (var i = 0, len = list.length; i < len; i++) {
            list[i].addEventListener(event, fn, false);
        }
    }

    /**
     * Assuming that we are using the DomManipulator class in the link
     * function of the directive.
     * We need to manipulate dom which hasn't been rendered, we do need to defer
     * the manipulating queries.
     * By using $timeout we wait until all $digest cycles are complete.
     * (Could be also using $scope.$evalAsync which will run the expression til the next $digest cycle).
     * @param cb
     */
    function domReady(cb){
        $timeout(function () {
           cb();
        }, 0)
    }

    /**
     * Get the relative position of an element.
     * @param element
     * @returns {{top: number, left: number}}
     */
    function getPosition(element){
        var elem = element.getBoundingClientRect(),
            parent = element.parentNode.parentNode.getBoundingClientRect(),
            top = parseInt(elem.top) - parseInt(parent.top),
            left = parseInt(elem.left) - parseInt(parent.left);

        return {
            top: top,
            left: left
        };
    }


    function createNewEvent(parent, position, title){
        var event = document.createElement("a");
        event.className = "event";
        event.style.top = position.top + 'px';
        event.style.left = position.left + 'px';
        event.innerHTML = '<h3>' + title + '</h3>';



        parent.appendChild(event);
    }


    return {
        addEventListenerList: addEventListenerList,
        domReady: domReady,
        getPosition: getPosition,
        createEvent: createNewEvent
    }
}]);