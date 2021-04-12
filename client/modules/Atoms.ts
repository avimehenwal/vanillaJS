interface html {
  (tag: string, text?: string, id?: string, className?: string): HTMLElement
}

let CE: html = (tag) => { return document.createElement(tag) }

// todo: we can use some Parametric/Subtyping Polymorphism here
let CEIT: html = (tag, text) => {
  let element = CE(tag)
  // @ts-ignore */
  element.innerText = text
  return element
}

let CEID: html = (tag, id) => {
  let element = CE(tag)
  // @ts-ignore */
  element.id = id
  return element
}

let CEIDT: html = (tag, id, text) => {
  let element = CE(tag)
  // @ts-ignore */
  element.id = id
  // @ts-ignore */
  element.innerText = text
  return element
}

export let H1 = (text: string): HTMLElement => CEIT('h1', text)
export let H2 = (text: string): HTMLElement => CEIT('h2', text)
export let FOOTER = (text: string): HTMLElement => CEIDT('footer', 'footer', text)
export let MAIN = () => CEID('main', 'main')
export let ASIDE = () => CE('aside')
export let NAV = () => CE('nav')
export let UL = () => CE('ul')
export let LI = (text) => CEIT('li', text)

// type name label required?
export let INPUT = (attributes) => {
  let element = CE('div')
  let input = CE('input')
  let label = CE('label')
  let div = CE('div')

  element.appendChild(label)
  element.appendChild(input)
  element.appendChild(div)

  if (attributes.hasOwnProperty('type')) {
    input.setAttribute('type', attributes['type'])
  } else {
    input.setAttribute('type', 'text')
  }
  if (attributes.hasOwnProperty('label')) {
    label.innerText = attributes['label']
  }
  if (attributes.hasOwnProperty('name')) {
    input.setAttribute('name', attributes['name'])
    label.setAttribute('for', attributes['name'])
    div.id = attributes['name']
  }
  if (attributes.hasOwnProperty('cb')) {
    input.onchange = (event) => attributes['cd'](event)
  }
  return element
}