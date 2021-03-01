// ==UserScript==
// @name         PF2 source redirect
// @version      0.2
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
    "https://paizo.com/products/btq01y0m":"https://online.anyflip.com/xnqmx/uygw/mobile/index.html",//bestiary
    "https://paizo.com/products/btq01y0k":"https://online.anyflip.com/xnqmx/bhnw/mobile/index.html",//core rulebook
    "https://paizo.com/products/btq022bc":"https://online.anyflip.com/hznwz/cggq/mobile/index.html",//advanced rulebook
    "https://paizo.com/products/btq021wf":"https://online.anyflip.com/bujx/ibib/mobile/index.html",//Lost Omens: Gods & Magic
    "https://paizo.com/products/btq0250x":"https://paizo.com/products/btq0250x",//Lost Omens: Pathfinder Society Guide
}
let allLinks = document.getElementsByTagName("a");
for(let i=0;i<allLinks.length;i++){
    let previous=allLinks[i].previousElementSibling;
    if(previous!==null&&previous.nodeName=="B"&&previous.innerHTML=="Source"){
        let originalLink=allLinks[i].href.split('?')[0];
        if(hrefDict[originalLink] === undefined){continue;}
        allLinks[i].href=hrefDict[allLinks[i].href.split('?')[0]]+"#p="+allLinks[i].firstChild.innerHTML.split(' ').last();
        console.log(allLinks[i])
    }
}
