/**
 * Created by louis on 01/06/15.
 */

'use strict';
describe('Unit: MainController', function() {
    // Load the module with MainController
    beforeEach(module('ngSunriseChallenge'));

    var $controller;

    /* setup */
    beforeEach(inject(function (_$controller_) {
        $controller = _$controller_;
    }));


    describe("Defined", function () {
        it("Doit bien exister", function () {
            var $scope = {};
            var controller = $controller("homeController", {$scope:$scope});

            expect(controller).toBeDefined();
        });
    });
});
