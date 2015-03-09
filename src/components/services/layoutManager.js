/**
 * sunrise
 *
 * @user llaine
 * @date 09/03/15
 */


'use strict';

var app = angular.module('ngSunriseChallenge');

app.factory('LayoutManager', [function () {
    var MIN_LEFT = 87;
    var MIN_TOP = 56;
    var COL_WIDTH = 152;
    var ROW_HEIGHT = 52;
    var HALF_ROW_HEIGHT = 26;
    var NB_DAYS_DISPLAY_ON_GRID = 7;
    var topBreakpoints = createColBreakpoints();


    /**
     * Determining on which grid the left params belong to.
     *
     * @param left
     * @returns {*}
     */
    function determineColOnGrid(left){
        var poz = 1000,
            col = 6;

        for(var i = 0; i < topBreakpoints.length ; i++){
            if(left >= topBreakpoints[i] && left <= topBreakpoints[i + 1]){
                poz = topBreakpoints[i];
                col = i;
            }
        }

        return {poz:poz, col:col};
    }

    /**
     * The column "grid" for the calendar.
     * Actually the column is 152px width.
     * In order to determine where to place an event in matter of left attribute,
     * i create an array with breakpoint,
     * which contains the minimum breakpoint of each day of the week aka each columns.
     * All the value represent pixels.
     *
     * Adding a plus one in order to have a little padding.
     *
     *
     * +-----+-----+
     * |  1  |   2 |
     * +-----+-----+
     * | 88px|239px| etc
     * +-----+-----+
     *
     * 87 : 87 + 152 * 0
     * 238 : 87 + 152 * 1
     *
     *
     *
     * @returns {Array}
     */
    function createColBreakpoints(){
        var p = [];
        for(var i = 0 ; i < NB_DAYS_DISPLAY_ON_GRID ; ++i){
            p[i] = MIN_LEFT + COL_WIDTH * i + 1;
        }
        return p;
    }


    return {
        determineLeft: determineColOnGrid
    }

}]);