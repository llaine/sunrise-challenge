/**
 * Created by louis on 02/06/15.
 */

'use strict';


describe('Test watch', function() {
    var $compile,
        $rootScope;

    // Load the myApp module, which contains the directive
    beforeEach(module('ngSunriseChallenge'));

    // Store references to $rootScope and $compile
    // so they are available to all tests in this describe block
    beforeEach(inject(function(_$compile_, _$rootScope_){
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $compile = _$compile_;
        $rootScope = _$rootScope_;
    }));

    it('Doit afficher l\'heure sous format hh:mm:ss ', function() {
        // Compile a piece of HTML containing the directive
        var element = $compile("<watch></watch>")($rootScope);
        // fire all the watches, so the scope expression {{1 + 1}} will be evaluated
        $rootScope.$digest();

        var date = new Date();
        var heure = date.getHours();
        var minutes = date.getMinutes();
        var secondes = date.getSeconds();

        var expectedHour =  heure + ":" + minutes + ":" + secondes;

        setTimeout(function () {

            expect(element.text()).toContain("Il est : " + expectedHour);

        }, 1000);

    });
});