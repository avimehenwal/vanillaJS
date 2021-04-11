// ISSUE: browser script tag src cannot load files without extensions
import { addScriptAsModuleToBody } from './modules/Utility.js'
import { CHeader, LIST } from './modules/Components.js'
import { MAIN, FOOTER, ASIDE, NAV } from './modules/Atoms.js'
import { projects } from './data/projectList.js'

addScriptAsModuleToBody("HomePage.js")
addScriptAsModuleToBody("Utility.js")
addScriptAsModuleToBody("Components.js")

let app = document.getElementById("app")

let pd = {
  title: 'Index Page'
}

// semantic HTML page structure
let webAppContainer = document.createElement('div')
webAppContainer.appendChild(CHeader(pd.title))
webAppContainer.appendChild(NAV())
webAppContainer.appendChild(ASIDE())
webAppContainer.appendChild(MAIN())
webAppContainer.appendChild(FOOTER('footer for ' + pd.title))

// app?.appendChild(Homepage)
app?.appendChild(webAppContainer)

// generate index
// return Node List and not Element
let main = document.getElementsByTagName('main')[0]
let list_html = LIST(projects)
// console.log(list_html);
main.appendChild(list_html)
