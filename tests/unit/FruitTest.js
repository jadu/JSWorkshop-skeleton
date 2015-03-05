
'use strict';

var Fruit = require('../../src/Fruit');

describe('Fruit', function () {
    describe('getWeight()', function () {
        it('should return 4 when the fruit has a weight of 4KG', function () {
            var fruit = new Fruit(4);

            expect(fruit.getWeight()).to.equal(4);
        });

        it('should return 10 when the fruit has a weight of 10KG', function () {
            var fruit = new Fruit(10);

            expect(fruit.getWeight()).to.equal(10);
        });
    });
});
