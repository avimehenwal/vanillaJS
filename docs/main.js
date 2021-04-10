// ISSUE: browser script tag src cannot load files without extensions
import { page, homepage } from './modules/homepage.js';
import { addScriptAsModuleToBody } from './modules/utility.js';
addScriptAsModuleToBody("homepage.js");
addScriptAsModuleToBody("utility.js");
console.log('loading ...' + page);
var app = document.getElementById("app");
app === null || app === void 0 ? void 0 : app.appendChild(homepage);
//# sourceMappingURL=main.js.map