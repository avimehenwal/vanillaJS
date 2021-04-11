// ISSUE: browser script tag src cannot load files without extensions
import { addScriptAsModuleToBody } from './modules/Utility.js';
import { LIST } from './modules/Components.js';
import { MAIN, FOOTER, ASIDE, NAV } from './modules/Atoms.js';
import { projects } from './data/projectList.js';
import * as atom from './modules/Atoms.js';
addScriptAsModuleToBody("VP1.js");
addScriptAsModuleToBody("Utility.js");
addScriptAsModuleToBody("Components.js");
export var VIndex = function () {
    // @ts-ignore */
    var main = document.getElementById('main');
    // @ts-ignore */
    main === null || main === void 0 ? void 0 : main.innerHTML = '';
    // @ts-ignore */
    main.appendChild(LIST(projects));
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
    title: 'Index Page'
};
// doesnt need window.onload with SPA, page is already loaded
// semantic HTML page structure
var webAppContainer = document.createElement('div');
webAppContainer.appendChild(CHeader(pd.title));
webAppContainer.appendChild(NAV());
webAppContainer.appendChild(ASIDE());
webAppContainer.appendChild(MAIN());
webAppContainer.appendChild(FOOTER('footer for ' + pd.title));
// app?.appendChild(Homepage)
app === null || app === void 0 ? void 0 : app.appendChild(webAppContainer);
VIndex();
var header = document.getElementById('index');
console.log(header);
// @ts-ignore * /
header === null || header === void 0 ? void 0 : header.onclick = function () { return VIndex(); };
// generate index
// return Node List and not HTMLElement
