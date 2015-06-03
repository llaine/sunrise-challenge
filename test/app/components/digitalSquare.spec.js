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


describe("Mocking service DigitalSquare", function () {
    var $scope, DigitalSquare;

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

    beforeEach(inject(function (_$controller_, $rootScope, _DigitalSquare_) {
        $scope = $rootScope.$new();
        DigitalSquare = _DigitalSquare_;

        _$controller_('homeController',
            { $scope:$scope, DigitalSquare:DigitalSquare });

        $scope.$digest();
    }));


    it("doit contenir tout les events au startup", function () {
        expect($scope.events).toEqual(mockEvents.data.events);
    });

});