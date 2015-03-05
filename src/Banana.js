
'use strict';

var Fruit = require('./Fruit');

function Banana(weight) {
    Fruit.call(this, weight);
}

Banana.prototype = Object.create(Fruit.prototype);

module.exports = Banana;
