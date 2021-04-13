// ISSUE: browser script tag src cannot load files without extensions
import { $ } from './modules/jQuery.js'
import { LI } from './modules/Atoms.js'
import { VP1 } from './modules/VP1.js'

// doesnt need window.onload with SPA, page is already loaded
let state = {
  clickCount: 0,
  projects: [
    {
      "title": "vanilla JS SPA",
      "cb": () => updateMainView(VP1)
    },
    {
      "title": "News article like margin",
      "href": "html/project2.html"
    },
    {
      "title": "Interactive Validations",
      "href": "html/project3.html"
    },
  ]
}

function updateMainView(ViewMainFn) {
  let main = document.getElementById('main')
  // todo: add fadeOut animation
  main?.classList.add('removing')
  setTimeout(() => {
    main?.classList.remove("removing");
  }, 1500);
  // @ts-ignore */
  main?.innerHTML = ''
  main?.appendChild(ViewMainFn())
}

let HProjects = (projects): HTMLElement => {
  let ul = document.createElement('ul')
  projects.map((project) => {
    let li = document.createElement('li')
    if (project.hasOwnProperty('href')) {
      let anchor = document.createElement('a')
      anchor.setAttribute('href', project['href'])
      anchor.innerText = project['title']
      li.appendChild(anchor)
    } else {
      li.innerText = project['title']
    }
    if (project.hasOwnProperty('cb')) { li.onclick = project['cb'] }
    ul.appendChild(li)
  })
  return ul
}

// getElementsByTag returns Node List and not HTMLElement
$('#aside').replace(HProjects(state.projects))

// Add #click tracking script, do not stop event bubbling
// track time spent on each page/ total on website
window.onclick = (e) => {
  console.log(e.target);
  state.clickCount += 1
  $('#footer').text('Tracking #clicks : ' + state.clickCount)
}