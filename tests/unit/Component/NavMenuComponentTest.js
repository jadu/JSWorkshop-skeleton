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
            it('should have no visible submenus', function () {
                expect(this.$menu.find('.expanded-nav-menu.expanded-nav-menu--visible')).to.have.length(0);
            });
        });

        describe('after clicking the first menu item', function () {
            it('should show the first menu item\'s submenu', function () {
                this.$menuItem1.click();

                expect(this.$submenu1.hasClass('expanded-nav-menu--visible')).to.be.true;
            });

            it('should not show the second menu item\'s submenu', function () {
                this.$menuItem1.click();

                expect(this.$submenu2.hasClass('expanded-nav-menu--visible')).to.be.false;
            });

            it('should stop propagation of the click event', function () {
                var event = $.Event('click');

                this.$menuItem1.trigger(event);

                expect(event.isPropagationStopped()).to.be.true;
            });

            it('should prevent the default behaviour of the click event', function () {
                var event = $.Event('click');

                this.$menuItem1.trigger(event);

                expect(event.isDefaultPrevented()).to.be.true;
            });
        });

        describe('after clicking the first and then second menu item', function () {
            it('should hide the first menu item\'s submenu', function () {
                this.$menuItem1.click();
                this.$menuItem2.click();

                expect(this.$submenu1.hasClass('expanded-nav-menu--visible')).to.be.false;
            });

            it('should show the second menu item\'s submenu', function () {
                this.$menuItem1.click();
                this.$menuItem2.click();

                expect(this.$submenu2.hasClass('expanded-nav-menu--visible')).to.be.true;
            });
        });

        describe('after clicking the first menu item then opening a sub-submenu', function () {
            it('should show the sub submenu', function () {
                this.$menuItem1.click();
                this.$menuItem1_1.click();

                expect(this.$submenu1_1.hasClass('expanded-nav-menu--visible')).to.be.true;
            });

            it('should not hide the sub submenu\'s parent menu', function () {
                this.$menuItem1.click();
                this.$menuItem1_1.click();

                expect(this.$submenu1.hasClass('expanded-nav-menu--visible')).to.be.true;
            });
        });

        describe('after clicking the first menu item then opening a sub-submenu then clicking outside the menu', function () {
            it('should hide the sub submenu', function () {
                this.$menuItem1.click();
                this.$menuItem1_1.click();
                this.$aParagraph.click();

                expect(this.$submenu1_1.hasClass('expanded-nav-menu--visible')).to.be.false;
            });

            it('should hide the sub submenu\'s parent menu', function () {
                this.$menuItem1.click();
                this.$menuItem1_1.click();
                this.$aParagraph.click();

                expect(this.$submenu1.hasClass('expanded-nav-menu--visible')).to.be.false;
            });
        });

        describe('after clicking the first menu item then clicking outside the menu', function () {
            it('should hide the first menu item\'s submenu', function () {
                this.$menuItem1.click();
                this.$aParagraph.click();

                expect(this.$submenu1.hasClass('expanded-nav-menu--visible')).to.be.false;
            });
        });
    });
});
