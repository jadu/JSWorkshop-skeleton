/*
 * JS workshop
 *
 * Jadu Ltd.
 */

'use strict';

var $ = require('jquery');

function NavMenuComponent($body, $menu) {
    this.$body = $body;
    this.$menu = $menu;
}

NavMenuComponent.prototype.initialize = function () {

};

module.exports = NavMenuComponent;
