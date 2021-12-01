/* A polyfill for browsers that don't support ligatures. */
/* The script tag referring to this file must be placed before the ending body tag. */

/* To provide support for elements dynamically added, this script adds
   method 'icomoonLiga' to the window object. You can pass element references to this method.
*/
(function () {
    'use strict';
    function supportsProperty(p) {
        var prefixes = ['Webkit', 'Moz', 'O', 'ms'],
            i,
            div = document.createElement('div'),
            ret = p in div.style;
        if (!ret) {
            p = p.charAt(0).toUpperCase() + p.substr(1);
            for (i = 0; i < prefixes.length; i += 1) {
                ret = prefixes[i] + p in div.style;
                if (ret) {
                    break;
                }
            }
        }
        return ret;
    }
    var icons;
    if (!supportsProperty('fontFeatureSettings')) {
        icons = {
            'home3': '&#xe903;',
            'house3': '&#xe903;',
            'bell': '&#xe951;',
            'alarm2': '&#xe951;',
            'equalizer': '&#xe992;',
            'sliders': '&#xe992;',
            'equalizer2': '&#xe993;',
            'sliders2': '&#xe993;',
            'pie-chart': '&#xe99a;',
            'stats': '&#xe99a;',
            'stats-dots': '&#xe99b;',
            'stats2': '&#xe99b;',
            'stats-bars': '&#xe99c;',
            'stats3': '&#xe99c;',
            'stats-bars2': '&#xe99d;',
            'stats4': '&#xe99d;',
            'power': '&#xe9b5;',
            'lightning': '&#xe9b5;',
            'switch': '&#xe9b6;',
            'clipboard': '&#xe9b8;',
            'board': '&#xe9b8;',
            'list-numbered': '&#xe9b9;',
            'options': '&#xe9b9;',
            'list': '&#xe9ba;',
            'todo': '&#xe9ba;',
            'tree': '&#xe9bc;',
            'branches': '&#xe9bc;',
            'menu': '&#xe9bd;',
            'list3': '&#xe9bd;',
            'cloud-check': '&#xe9c4;',
            'cloud4': '&#xe9c4;',
          '0': 0
        };
        delete icons['0'];
        window.icomoonLiga = function (els) {
            var classes,
                el,
                i,
                innerHTML,
                key;
            els = els || document.getElementsByTagName('*');
            if (!els.length) {
                els = [els];
            }
            for (i = 0; ; i += 1) {
                el = els[i];
                if (!el) {
                    break;
                }
                classes = el.className;
                if (/icon-/.test(classes)) {
                    innerHTML = el.innerHTML;
                    if (innerHTML && innerHTML.length > 1) {
                        for (key in icons) {
                            if (icons.hasOwnProperty(key)) {
                                innerHTML = innerHTML.replace(new RegExp(key, 'g'), icons[key]);
                            }
                        }
                        el.innerHTML = innerHTML;
                    }
                }
            }
        };
        window.icomoonLiga();
    }
}());
