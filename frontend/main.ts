// ISSUE: browser script tag src cannot load files without extensions
import { page, homepage } from './modules/homepage.js'
import { addScriptAsModuleToBody } from './modules/utility.js'

addScriptAsModuleToBody("homepage.js")
addScriptAsModuleToBody("utility.js")

console.log('loading ...' + page);
let app = document.getElementById("app")
app?.appendChild(homepage)