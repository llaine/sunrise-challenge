/**
 * Created by louis on 02/06/15.
 */

'use strict';

describe('Uppercase filter', function() {

    var $filter;

    beforeEach(inject(function(_$filter_){
        $filter = _$filter_;
    }));

    it('Ne retourne rien lorsqu\'aucune valeur est passé', function() {
        var uppercase = $filter('uppercase');
        expect(uppercase(null)).toEqual(null);
    });

    it('Retourne une valeur en majuscule', function() {
        var uppercase = $filter('uppercase');
        expect(uppercase("toto")).toEqual('TOTO');
    });
});