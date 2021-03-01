// ==UserScript==
// @name         acrobatiq shortcuts
// @version      0.2
// @description  navigation shortcuts for acrobatiq
// @updateURL    https://github.com/Coy-Allen/TampermonkeyScripts/raw/main/acrobatiq%20shortcuts.user.js
// @downloadURL  https://github.com/Coy-Allen/TampermonkeyScripts/raw/main/acrobatiq%20shortcuts.user.js
// @author       coy1010allen
// @include      https://wgu-nx.acrobatiq.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.addEventListener('keydown', function(e) {
        if (e.keyCode == 37 && e.shiftKey && !e.ctrlKey && !e.altKey && !e.metaKey) {
            window.location = document.getElementsByClassName("prev_page")[1].href;
        }
        if (e.keyCode == 39 && e.shiftKey && !e.ctrlKey && !e.altKey && !e.metaKey) {
            window.location = document.getElementsByClassName("next_page")[1].href;
        }
    }, false);
})();
