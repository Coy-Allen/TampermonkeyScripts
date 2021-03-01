// ==UserScript==
// @name         mindedgeonline shortcuts
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @include      https://wgu.mindedgeonline.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.addEventListener('keydown', function(e) {
        if (e.keyCode == 37 && e.shiftKey && !e.ctrlKey && !e.altKey && !e.metaKey) {
            window.location = document.getElementById("previousbutton").href;
        }
        if (e.keyCode == 39 && e.shiftKey && !e.ctrlKey && !e.altKey && !e.metaKey) {
            window.location = document.getElementById("nextbutton").href;
        }
    }, false);
})();