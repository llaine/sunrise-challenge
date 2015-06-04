/**
 * Created by louis on 03/06/15.
 */

describe("btnBookmark directive", function () {

    var $compile,
        $rootScope,
        $scope,
        BookMarksService,
        directive;

    function createDirective() {
        var directive = $compile('<btn-bookmark event="{name:\'toto\', end_at:2005, description:\'test\'}" venue="{address:\'11 rue des Lilas\', city:\'Paris\'}"></btn-bookmark>')($rootScope);
        $rootScope.$digest();
        $scope = directive.isolateScope();
        $scope.$apply();
        return directive;
    }

    beforeEach(module('ngSunriseChallenge'));

    beforeEach(inject(function(_$compile_, _$rootScope_, _BookMarksService_){
        // The injector unwraps the underscores (_) from around the parameter names when matching

        $compile = _$compile_;

        $scope = _$rootScope_.$new();

        $rootScope = _$rootScope_;

        BookMarksService = _BookMarksService_;


    }));


    it('La directive doit retourner un bouton indiquant que le fav n\'est pas ajouté et un scope à false', function () {
        directive = createDirective();

        expect(directive.find('button').length).toBe(1);

        expect($scope.isBookmarked).toBe(false);

        expect(directive.text()).toEqual("Add to favorites");
    });



    it('Le bouton doit afficher que l\'évenement à déjà été mit dans les favoris', function () {

        BookMarksService.add({
            name:"toto",
            date:'2005',
            description:'test',
            address:'11 rue des Lilas',
            city:'Paris'
        });

        directive = createDirective();

        expect(directive.find('button').length).toBe(1);

        expect($scope.isBookmarked).toBe(true);

        expect(directive.text()).toEqual("Already in favs");

    });




});