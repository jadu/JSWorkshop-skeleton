
'use strict';

function Fruit(weight) {
    this.weight = weight;
}

Fruit.prototype.getWeight = function () {
    return this.weight;
};

module.exports = Fruit;
