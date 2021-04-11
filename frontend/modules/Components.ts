import * as atom from './Atoms.js'

export let LIST = (collection): HTMLElement => {
  let ul = atom.UL()
  for (const key in collection) {
    let li = atom.LI(collection[key]['title'])
    li.onclick = collection[key]['cb']
    ul.appendChild(li)
  }
  return ul
}