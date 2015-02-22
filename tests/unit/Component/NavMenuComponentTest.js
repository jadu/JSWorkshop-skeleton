/*
 * JS workshop
 *
 * Jadu Ltd.
 */

/*jshint multistr:true */
'use strict';

var $ = require('jquery'),
    NavMenuComponent = require('../../../src/Component/NavMenuComponent');

describe('NavMenuComponent', function () {
    beforeEach(function () {
        this.$body = $('<body></body');
        this.$aParagraph = $('<p></p>').appendTo(this.$body);
        this.$menu = $(
            '\
<ul>\
    <li>\
        <a class="expanded-nav-menu-toggle" id="menuItem1">Menu 1</a>\
        <div class="expanded-nav-menu" id="submenu1">\
            <ul>\
                <li>\
                    <a class="expanded-nav-menu-toggle" id="menuItem1_1">Menu 1 sub 1</a>\
                    <div class="expanded-nav-menu" id="submenu1_1">\
                        <ul>\
                            <li>\
                                <a class="expanded-nav-menu-toggle">Menu 1 sub 1 sub 1</a>\
                            </li>\
                        </ul>\
                    </div>\
                </li>\
            </ul>\
        </div>\
    </li>\
    <li>\
        <a class="expanded-nav-menu-toggle" id="menuItem2">Menu 2</a>\
        <div class="expanded-nav-menu" id="submenu2">\
            <ul>\
                <li>\
                    <a class="expanded-nav-menu-toggle">Menu 2 sub 1</a>\
                </li>\
            </ul>\
        </div>\
    </li>\
</ul>').appendTo(this.$body);

        this.$menuItem1 = this.$menu.find('#menuItem1');
        this.$menuItem1_1 = this.$menu.find('#menuItem1_1');
        this.$menuItem2 = this.$menu.find('#menuItem2');
        this.$submenu1 = this.$menu.find('#submenu1');
        this.$submenu1_1 = this.$menu.find('#submenu1_1');
        this.$submenu2 = this.$menu.find('#submenu2');

        this.navMenu = new NavMenuComponent(this.$body, this.$menu);
    });

    describe('initialize()', function () {
        beforeEach(function () {
            this.navMenu.initialize();
        });

        describe('before any menu items are clicked', function () {
            it('should have no visible submenus');
        });

        describe('after clicking the first menu item', function () {
            it('should show the first menu item\'s submenu');

            it('should not show the second menu item\'s submenu');

            it('should stop propagation of the click event');

            it('should prevent the default behaviour of the click event');
        });
    });
});
