import { CHeader } from '../main.js'
import { FOOTER } from './Atoms.js'

export let VP1 = (): HTMLElement => {
  let pageData = {
    title: "Project 1",
    footer: 'Project 1 view'
  }

  let main = document.getElementById('main')
  // @ts-ignore */
  main.className = 'main-container'
  // @ts-ignore */
  main.appendChild(CHeader(pageData.title))
  // @ts-ignore */
  main.appendChild(FOOTER('footer for ' + pageData.footer))
  // @ts-ignore */
  return main
}
