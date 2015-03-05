
'use strict';

var Banana = require('../../src/Banana');

describe('Banana', function () {
    describe('getWeight()', function () {
        it('should return 4 when the banana has a weight of 4KG', function () {
            var banana = new Banana(4);

            expect(banana.getWeight()).to.equal(4);
        });

        it('should return 10 when the banana has a weight of 10KG', function () {
            var banana = new Banana(10);

            expect(banana.getWeight()).to.equal(10);
        });
    });
});
