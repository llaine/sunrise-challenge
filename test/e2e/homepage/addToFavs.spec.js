/**
 * Created by louis on 04/06/15.
 */


describe("Lorsque j'ajoute un évenement aux favoris", function () {
    var favorisList = element.all(by.repeater("event in bookmarkedEvents"));
    var eventList = element.all(by.repeater("event in events"));


    beforeEach(function () {
        browser.get('index.html');
        /* on attend que la liste se soit bien affiché aka on attend le resolve de la promise */
        eventList.then(function () {

            var firstButton = element.all(by.css('button[ng-if*=isBookmarked]')).first();

            expect((firstButton).isEnabled()).toBeTruthy();

            firstButton.click();



        });
    });
    
    
    
    it("Doit contenir le favoris dans la liste des favoris", function () {

        browser.get("index.html#/bookmarks");

        expect(favorisList.count()).toEqual(1);

    });


});