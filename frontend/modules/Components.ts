import * as atom from './Atoms.js'

export let CHeader = (text: string): HTMLElement => {
  // let headerComponent = new DocumentFragment()
  let header = document.createElement('header')
  header.appendChild(atom.H1(text))
  return header
}

export let LIST = (collection): HTMLElement => {
  let ul = atom.UL()
  for (const key in collection) {
    let li = atom.LI(collection[key]['title'])
    ul.appendChild(li)
  }
  return ul
}