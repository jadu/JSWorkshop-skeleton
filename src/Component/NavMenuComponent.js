/*
 * JS workshop
 *
 * Jadu Ltd.
 */

'use strict';

var VISIBLE_CLASS = 'expanded-nav-menu--visible',
    $ = require('jquery');

function NavMenuComponent($body, $menu) {
    this.$body = $body;
    this.$menu = $menu;
}

NavMenuComponent.prototype.initialize = function () {
    var component = this,
        $menu = component.$menu,
        $openSubmenu = $();

    $menu.on('click', '.expanded-nav-menu-toggle', function (event) {
        var $submenu = $(this).find('~ .expanded-nav-menu');

        if ($openSubmenu[0] && !$.contains($openSubmenu[0], $submenu[0])) {
            $openSubmenu.removeClass(VISIBLE_CLASS);
        }

        $submenu.addClass(VISIBLE_CLASS);
        $openSubmenu = $submenu;

        event.stopPropagation();
        event.preventDefault();
    });

    component.$body.click(function () {
        // Close all parent submenus of the open one
        $openSubmenu.parents('.expanded-nav-menu').each(function () {
            $(this).removeClass(VISIBLE_CLASS);
        });

        $openSubmenu.removeClass(VISIBLE_CLASS);
    });
};

module.exports = NavMenuComponent;