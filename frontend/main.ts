// ISSUE: browser script tag src cannot load files without extensions
import { addScriptAsModuleToBody, updateMainView } from './modules/Utility.js'
import { LIST } from './modules/Components.js'
import { MAIN, FOOTER, ASIDE, NAV } from './modules/Atoms.js'
import { projects } from './data/projectList.js'
import * as atom from './modules/Atoms.js'

addScriptAsModuleToBody("VP1.js")
addScriptAsModuleToBody("Utility.js")
addScriptAsModuleToBody("Components.js")

export let VIndex = () => {
  // @ts-ignore */
  let main = document.getElementById('main')
  // @ts-ignore */
  main?.innerHTML = ''
  // @ts-ignore */
  main.appendChild(LIST(projects))
}

export let CHeader = (text: string): HTMLElement => {
  // let headerComponent = new DocumentFragment()
  let header = document.createElement('header')
  header.id = 'index'
  header.appendChild(atom.H1(text))
  return header
}


let app = document.getElementById("app")
let pd = {
  title: 'Index Page'
}

// doesnt need window.onload with SPA, page is already loaded

// semantic HTML page structure
let webAppContainer = document.createElement('div')
webAppContainer.appendChild(CHeader(pd.title))
webAppContainer.appendChild(NAV())
webAppContainer.appendChild(ASIDE())
webAppContainer.appendChild(MAIN())
webAppContainer.appendChild(FOOTER('footer for ' + pd.title))

// app?.appendChild(Homepage)
app?.appendChild(webAppContainer)
VIndex()
let header = document.getElementById('index')
console.log(header)
// @ts-ignore * /
header?.onclick = () => VIndex()

// generate index
// return Node List and not HTMLElement
