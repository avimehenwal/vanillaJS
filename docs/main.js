import { CIndex } from './modules/Components.js';
import { MAIN, FOOTER, ASIDE, NAV } from './modules/Atoms.js';
import * as atom from './modules/Atoms.js';
import { $ } from './modules/jQuery.js';
// addScriptAsModuleToBody("VP1.js")
// addScriptAsModuleToBody("Utility.js")
// addScriptAsModuleToBody("Components.js")
var VIndex = function () {
    $('#main').replace(CIndex());
};
export var CHeader = function (text) {
    // let headerComponent = new DocumentFragment()
    var header = document.createElement('header');
    header.id = 'index';
    header.appendChild(atom.H1(text));
    return header;
};
var app = document.getElementById("app");
var pd = {
    title: 'no framework SPA',
    clickCount: 0
};
// doesnt need window.onload with SPA, page is already loaded
// semantic HTML page structure
var webAppContainer = document.createElement('div');
webAppContainer.appendChild(CHeader(pd.title));
webAppContainer.appendChild(NAV());
webAppContainer.appendChild(ASIDE());
webAppContainer.appendChild(MAIN());
webAppContainer.appendChild(FOOTER('Tracking #clicks : ' + pd.clickCount));
// app?.appendChild(Homepage)
app === null || app === void 0 ? void 0 : app.appendChild(webAppContainer);
VIndex();
var header = document.getElementById('index');
// @ts-ignore * /
header === null || header === void 0 ? void 0 : header.onclick = function () { return VIndex(); };
// generate index
// return Node List and not HTMLElement
// Add #click tracking script, do not stop event bubbling
// track time spent on each page/ total on website
window.onclick = function (e) {
    console.log(e.target);
    pd.clickCount += 1;
    $('#footer').text('Tracking #clicks : ' + pd.clickCount);
};
