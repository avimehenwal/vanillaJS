// ISSUE: browser script tag src cannot load files without extensions
import { addScriptAsModuleToBody, updateMainView } from './modules/Utility.js'
import { CIndex } from './modules/Components.js'
import { MAIN, FOOTER, ASIDE, NAV } from './modules/Atoms.js'
import * as atom from './modules/Atoms.js'
import { $ } from './modules/jQuery.js'

// addScriptAsModuleToBody("VP1.js")
// addScriptAsModuleToBody("Utility.js")
// addScriptAsModuleToBody("Components.js")

let VIndex = () => {
  $('#main').replace(CIndex())
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
  title: 'no framework SPA',
  clickCount: 0
}

// doesnt need window.onload with SPA, page is already loaded

// semantic HTML page structure
let webAppContainer = document.createElement('div')
webAppContainer.appendChild(CHeader(pd.title))
webAppContainer.appendChild(NAV())
webAppContainer.appendChild(ASIDE())
webAppContainer.appendChild(MAIN())
webAppContainer.appendChild(FOOTER('Tracking #clicks : ' + pd.clickCount))

// app?.appendChild(Homepage)
app?.appendChild(webAppContainer)
VIndex()
let header = document.getElementById('index')
// @ts-ignore * /
header?.onclick = () => VIndex()

// generate index
// return Node List and not HTMLElement

// Add #click tracking script, do not stop event bubbling
// track time spent on each page/ total on website
window.onclick = (e) => {
  console.log(e.target);
  pd.clickCount += 1
  $('#footer').text('Tracking #clicks : ' + pd.clickCount)
}