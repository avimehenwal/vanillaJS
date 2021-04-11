interface html {
  (tag: string, text?: string, id?: string, className?: string): HTMLElement
}

let CE: html = (tag) => { return document.createElement(tag) }

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

export let H1 = (text: string): HTMLElement => CEIT('h1', text)
export let FOOTER = (text: string): HTMLElement => CEIT('footer', text)
export let MAIN = () => CEID('main', 'main')
export let ASIDE = () => CE('aside')
export let NAV = () => CE('nav')
export let UL = () => CE('ul')
export let LI = (text) => CEIT('li', text)