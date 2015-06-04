/**
 * Created by louis on 02/06/15.
 */

var mockEvents = {
    data: {
        events: [
            {
                Event: {
                    name:"toto",
                    end_at:"2005",
                    description:"<p>La fête du toto</p>"
                },
                Venue: {
                    address: '11 rue des Lilas',
                    city:"Paris"
                }
            },
            {
                Event: {
                    name:"Marciac",
                    end_at:"2015",
                    description:"<p>Jazz in Marciac</p>"
                },
                Venue: {
                    address: 'Place de la Mairie',
                    city:"Marcias"
                }
            },
            {
                Event: {
                    name:"VU",
                    end_at:"2016",
                    description:"<p>Les vibrations urbaines à Pessac</p>"
                },
                Venue: {
                    address: 'Bellegrave',
                    city:"Pessac"
                }
            }
        ]
    }
};


describe("Mocking service bookmarks", function () {
    var $scope, BookMarksService;

    beforeEach(module('ngSunriseChallenge'));

    beforeEach(inject(function (_$controller_, $rootScope, _BookMarksService_) {
        $scope = $rootScope.$new();
        BookMarksService = _BookMarksService_;
    }));


    it("Doit ajouter un nouveau bookmark au click du bookmark sans doublons", function () {

        var eventBookmarke = mockEvents.data.events[0];

        var formatedEvent = {
            name:eventBookmarke.Event.name,
            date:eventBookmarke.Event.end_at,
            description:eventBookmarke.Event.description,
            address:eventBookmarke.Venue.address,
            city:eventBookmarke.Venue.city
        };

        BookMarksService.add(formatedEvent);

        expect(BookMarksService.query().length).toBe(1);

        /* renvoie un tableau d'évenement */
        expect(BookMarksService.query()).toEqual([formatedEvent]);

        /* on ajoute le même pour vérifier qu'il ne soit pas en double */
        BookMarksService.add(formatedEvent);

        /*doit toujours être à un; */
        expect(BookMarksService.query().length).toBe(1);


        /*la fonction get doit retourner l'element demandé */
        expect(BookMarksService.get(eventBookmarke.Event.name)).toEqual(formatedEvent);

        /*l'event dont le nom === michel n'existe pas, donc doit renvoyer null */
        expect(BookMarksService.get("michel")).toEqual(null);

    });
});