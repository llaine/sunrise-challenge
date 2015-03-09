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

app.service('DomManipulator', ['$timeout','LayoutManager', function ($timeout, LayoutManager) {
    var EVENT_CLASS_NAME = "event",
        EVENT_DATA_COLUMNS = 'data-column';

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

    function getSiblings(parent){
        if(parent.children.length > 0) {
            return parent.children;
        }
    }


    /**
     * Create a new a.event tag on parent tag params.
     *
     * - Set position.
     * - Check for siblings
     * - Format the event
     * - Append to the DOM.
     *
     * @param parent
     * @param position
     * @param title
     */
    function createNewEvent(parent, position){
        /* Search for siblings in the clicked div */
        var siblings = getSiblings(parent);
        /* Create a new a aka event. */
        var event = document.createElement("a");

        /* Setup all the attribute to the new event and on the siblings (if there) */
        setUpAttributToEvent(position, siblings, event);

        /* Append the event to the clicked div  */
        parent.appendChild(event);
    }

    // TODO determiner si sur la même column avec breakpoints.
    function setUpAttributToEvent(position, siblings, event){
        var left = LayoutManager.determineLeft(position.left);

        event.className = EVENT_CLASS_NAME;
        event.setAttribute(EVENT_DATA_COLUMNS, left.col);
        event.innerHTML = '<h3>Hello World ! </h3>';

        if(siblings) {
            switch (siblings.length) {
                case 0:
                    event.style.top = position.top + 'px';
                    event.style.left = left.poz + 'px';
                    break;
                /*
                Okay we just have on event on the current div
                So let's split them in the cell.
                */
                case 1:
                    /* For the siblings, shrinkin the size */
                    siblings[0].style.width = 50+'px';
                    /* for the new event */
                    event.style.width = 50 + 'px';
                    event.style.left = (left.poz + 50) + 'px';

                    break;
                case 2:


                    break;
                case 3:


                    break;
            }
        }
    }


    return {
        addEventListenerList: addEventListenerList,
        domReady: domReady,
        getPosition: getPosition,
        createEventOnGrid: createNewEvent
    }
}]);