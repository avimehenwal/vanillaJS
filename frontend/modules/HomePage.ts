import { CHeader, FOOTER } from './Components.js'

// Homepage - Index of project with links
// use <main> for dominant content

let pageData = {
  title: "HomePage",
  footer: 'some footer data'
}

let CHomepage = (pageData): HTMLElement => {
  let pageContainer = document.createElement('div')
  pageContainer.className = 'pageContainer-container'

  pageContainer.appendChild(CHeader(pageData.title))
  pageContainer.appendChild(FOOTER('footer for ' + pageData.title))
  return pageContainer
}

export default CHomepage(pageData)