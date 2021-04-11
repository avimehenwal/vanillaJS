let EL = (elementTag: string, text: string): HTMLElement => {
  let element = document.createElement(elementTag)
  element.innerText = text
  return element
}

export let H1 = (text: string): HTMLElement => EL('h1', text)
export let FOOTER = (text: string): HTMLElement => EL('footer', text)


export let CHeader = (text: string): HTMLElement => {
  // let headerComponent = new DocumentFragment()
  let header = document.createElement('header')
  header.appendChild(H1(text))
  return header
}