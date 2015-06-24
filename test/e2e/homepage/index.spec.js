/**
 * Created by louis on 04/06/15.
 */


describe('Mon application au lancement', function () {

    beforeEach(function () {
        browser.get("index.html");
    });


    it("Doit contenir le titre Sunrise Challenge", function () {
        expect(browser.getTitle()).toEqual('Sunrise challenge');
    });


    it("Doit afficher une liste de 20 évenements contenant tous des boutons actifs", function () {
        var eventList = element.all(by.repeater("event in events"));
        expect(eventList.count()).toEqual(20);

        eventList.then(function (elements) {
            elements.map(function (element) {
                expect(element.all(by.css('button[ng-if*=isBookmarked]')).isEnabled()).toBeTruthy();
            });
        });

    });

});