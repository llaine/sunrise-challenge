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
    var $scope, BookMarksService, DigitalSquare;

    beforeEach(module('ngSunriseChallenge'));

    beforeEach(function () {
        /* création de notre mock service, avec des fake datas */
        var mockDigitalSquare = {};
        module('ngSunriseChallenge', function ($provide) {
            $provide.value('DigitalSquare', mockDigitalSquare);
        });

        inject(function ($q) {
            mockDigitalSquare.query = function () {
                var defer = $q.defer();
                defer.resolve(mockEvents);
                return defer.promise;
            }
        });
    });


    beforeEach(inject(function (_$controller_, $rootScope, _BookMarksService_, _DigitalSquare_) {
        $scope = $rootScope.$new();
        BookMarksService = _BookMarksService_;
        DigitalSquare = _DigitalSquare_;

        _$controller_('homeController',
            {$scope: $scope, DigitalSquare: DigitalSquare, BookMarksService: BookMarksService});

        $scope.$digest();
    }));


    it("Doit ajouter un nouveau bookmark au click du bookmark", function () {

        var eventBookmarke = mockEvents.data.events[0];

        var formatedEvent = {
            name:eventBookmarke.Event.name,
            date:eventBookmarke.Event.end_at,
            description:eventBookmarke.Event.description,
            address:eventBookmarke.Venue.address,
            city:eventBookmarke.Venue.city
        };

        $scope.bookmarkEvent(
            eventBookmarke.Event.name,
            eventBookmarke.Event.end_at,
            eventBookmarke.Event.description,
            eventBookmarke.Venue.address,
            eventBookmarke.Venue.city
        );

        expect(BookMarksService.query().length).toBe(1);

        expect(BookMarksService.query()).toEqual([formatedEvent]);


    });
});