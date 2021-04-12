import * as atom from './Atoms.js'
import { projects } from './data.js'


let LIST = (projects): HTMLElement => {
  let ul = atom.UL()
  projects.map((project) => {
    let li = atom.LI(project['title'])
    if (project.hasOwnProperty('cb')) { li.onclick = project['cb'] }
    ul.appendChild(li)
  })
  return ul
}

export let CIndex = () => LIST(projects)