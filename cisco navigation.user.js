// ==UserScript==
// @name         cisco navigation
// @version      0.2
// @description  Navigate Cisco/WGU CCNA
// @updateURL    https://github.com/Coy-Allen/TampermonkeyScripts/raw/main/cisco%20navigation.user.js
// @downloadURL  https://github.com/Coy-Allen/TampermonkeyScripts/raw/main/cisco%20navigation.user.js
// @author       coy1010allen
// @match        https://ondemandelearning.cisco.com/cisco-ck-wgu/ccna10/*
// @grant        none
// ==/UserScript==
const LEFT_KEY = 37;
const RIGHT_KEY = 39;
window.addEventListener("keydown", keyboardHandler, false);
function keyboardHandler(zEvent){
    if (zEvent.altKey || zEvent.ctrlKey || zEvent.shiftKey) {
    } else {
        if (zEvent.which == LEFT_KEY) {
            document.getElementsByClassName("navbar-nav")[0].children[0].click()
        }
        else if (zEvent.which == RIGHT_KEY) {
            document.getElementsByClassName("navbar-nav")[0].children[1].click()
        }
    }
}
