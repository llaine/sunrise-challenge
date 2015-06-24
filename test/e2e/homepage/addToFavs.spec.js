/**
 * Created by louis on 04/06/15.
 */


var isDeleted = false, isClicked = false;

describe("Lorsque j'ajoute un évenement aux favoris", function () {

    var favorisList = element.all(by.repeater("event in bookmarkedEvents"));
    var eventList = element.all(by.repeater("event in events"));

    beforeEach(function () {
        browser.get('index.html');
        if(!isDeleted) {
            browser.executeScript("window.sessionStorage.clear()");
            isDeleted = true;
        }
        /* on attend que la liste se soit bien affiché aka on attend le resolve de la promise */
        eventList.then(function () {

            if(!isClicked){
                var firstButton = element.all(by.css('button[ng-if*=isBookmarked]')).first();

                expect((firstButton).isEnabled()).toBeTruthy();

                firstButton.click();

                isClicked = true;
            }



        });
    });
    
    
    
    it("Doit contenir le favoris dans la liste des favoris", function () {

        browser.get("index.html#/bookmarks");

        expect(favorisList.count()).toEqual(1);

    });


    it("Doit rendre le bouton inactif puisque déjà dans les favoris", function () {

        browser.get("index.html#/bookmarks");

        browser.get("index.html");

        /* on revient sur la page d'acceuil et normalmment tout se passe bien!  */
        expect(element.all(by.css('button[ng-if*=isBookmarked]')).first().isEnabled()).toBeFalsy()

    });



});