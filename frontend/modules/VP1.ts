import { $ } from './jQuery.js'
import { INPUT, H2 } from './Atoms.js'

// todo: match exactly one occourence
function hasAtSymbol(text) {
  return /.*@.*/.test(text)
}

function hasPeriodSymbol(text) {
  return /\./.test(text)
}

function emailValidationRules(text) {
  console.log(text);

  // let a = hasAtSymbol(text)
  // let b = hasPeriodSymbol(text)
  // let errorMsg = Array()
  // if (!a) {
  //   const msg = "Email should contain @ symbol"
  //   errorMsg.push(msg)
  // }
  // return
}

export let VP1 = (): HTMLElement => {
  let pageData = {
    title: "Project 1",
    footer: 'Project 1 view'
  }
  let container = document.createElement('div')
  container.id = 'p1'
  container.className = 'project'

  container.appendChild(H2(pageData.title))
  container.appendChild(INPUT({ "name": "name", "label": "Enter your name" }))
  container.appendChild(INPUT({ "name": "password", "type": "password", "label": "Enter your strong password" }))


  return container
}

// $("input[name=name]").on('change', (event) => emailValidationRules(event))