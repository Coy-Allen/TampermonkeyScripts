// ==UserScript==
// @name         PF2 source redirect
// @version      0.4
// @description  replace source links with anyflip books/pages
// @updateURL    https://github.com/Coy-Allen/TampermonkeyScripts/raw/main/PF2%20source%20redirect.user.js
// @downloadURL  https://github.com/Coy-Allen/TampermonkeyScripts/raw/main/PF2%20source%20redirect.user.js
// @author       coy1010allen
// @match        https://2e.aonprd.com/*
// @grant        none
// ==/UserScript==

if (!Array.prototype.last){
    Array.prototype.last = function(){
        return this[this.length - 1];
    };
};

let hrefDict = {
    "btq01y0k":"xnqmx/bhnw",//Core Rulebook
    "btq022bc":"hznwz/cggq",//Advanced Player's Guide
    "btq01zq7":"hznwz/bwio",//Gamemastery Guide
    "btq01y0m":"xnqmx/uygw",//Bestiary
    "btq01zqa":"bujx/ibib", //Lost Omens - Gods & Magic
    "btq021wf":"bujx/ibib", //Lost Omens - Gods & Magic (Web Supplement)
    "btq0250x":"hznwz/npey",//Lost Omens - Pathfinder Society Guide
    "btq01zpx":"vvhfw/divc",//Lost Omens - Character Guide
    "btq01zoj":"vvhfw/iijy",//Lost Omens - World Guide
}
let allLinks = document.getElementsByTagName("a");
for(let i=0;i<allLinks.length;i++){
    let previous=allLinks[i].previousElementSibling;
    if(previous!==null&&previous.nodeName=="B"&&previous.innerHTML=="Source"){
        let originalLink=allLinks[i].href.split('?')[0].split('/').last();
        if(hrefDict[originalLink] === undefined){continue;}
        allLinks[i].href="https://online.anyflip.com/"+hrefDict[originalLink]+"#p="+allLinks[i].firstChild.innerHTML.split(' ').last();
        console.log(allLinks[i])
    }
}
