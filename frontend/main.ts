// ISSUE: browser script tag src cannot load files without extensions
import { addScriptAsModuleToBody } from './modules/Utility.js'
import Homepage from './modules/HomePage.js'

addScriptAsModuleToBody("HomePage.js")
addScriptAsModuleToBody("Utility.js")
addScriptAsModuleToBody("Components.js")

let app = document.getElementById("app")
app?.appendChild(Homepage)


// list all modules
// cannot use fs on client, only works on server
// const testFolder = './modules/';

