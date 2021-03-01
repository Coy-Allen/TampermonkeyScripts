// ==UserScript==
// @name         PF2 source redirect
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
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
    "https://paizo.com/products/btq0250x":"https://paizo.com/products/btq0250x",//
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