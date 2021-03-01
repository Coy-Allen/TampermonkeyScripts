// ==UserScript==
// @name         mindedgeonline shortcuts
// @version      0.2
// @description  navigation shortcuts
// @updateURL    https://github.com/Coy-Allen/TampermonkeyScripts/raw/main/mindedgeonline%20shortcuts.user.js
// @downloadURL  https://github.com/Coy-Allen/TampermonkeyScripts/raw/main/mindedgeonline%20shortcuts.user.js
// @author       coy1010allen
// @match        https://wgu.mindedgeonline.com/*
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
