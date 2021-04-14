import { $ } from '../modules/jQuery.js'

let form = `
<div class=form-container>
  <form action="#" name="registerEmail">
    <label for="name">Enter your name</label>
    <input aria-label="Name" name="name" type="text"><br>

    <label for="email">Enter your Email</label>
    <input aria-label="Email address" name="email" type="text" required><br>

    <label for="gdpr">Do you agree to give give us your email</label>
    <input aria-label="gdpr" name="gdpr" type="checkbox" required><br>

    <button type="submit">Submit</button>

    <div id="validations"></div>
  </form>
</div>
`
$('main').html(form)

function exactlyOnceAtSymbol(text) { return /@/.test(text) }
function minimumOneDotSymbol(text) { return /\./.test(text) }
function minimum4CharsLong(text) { (text.length > 3) ? true : false }

// @ts-ignore */
let name = <HTMLInputElement>document.forms[0].name
name?.addEventListener('input', validateName)
// @ts-ignore */
let email = <HTMLInputElement>document.forms[0].email
email?.addEventListener('input', validateEmail)

let nameValidationData = [
  { rid: 1, name: 'no special symbols in name', status: false },
  { rid: 2, name: 'name is atleast 2 characters long', status: false },
  { rid: 3, name: 'no numbers in name', status: false },
]

function validateName(this) {
  let text = this.value.toString()
  if (/^\w+$/.test(text)) {
    nameValidationData[0]['status'] = true
  } else {
    nameValidationData[0]['status'] = false
  }
  if (text.length > 1) {
    nameValidationData[1]['status'] = true
  } else {
    nameValidationData[1]['status'] = false
  }
  if (!/\d/.test(text)) {
    nameValidationData[2]['status'] = true
  } else {
    nameValidationData[2]['status'] = false
  }

  // render
  let validationsList = `
  <ul>
    ${nameValidationData.map(validation =>
    (validation.status) ? `<li class="green">${validation.name}</li>` : `<li class="red">${validation.name}</li>`
  ).join("")}
  </ul>
  `
  $('#validations').html(validationsList)
}

function validateEmail(this) {
  let text = this.value.toString()
  // console.log(JSON.stringify(emailValidationData[2]) + text)

  if (exactlyOnceAtSymbol(text)) {
    emailValidationData[0]['status'] = true
  }
  else {
    emailValidationData[0]['status'] = false
  }
  if (minimumOneDotSymbol(text)) {
    emailValidationData[1]['status'] = true
  } else {
    emailValidationData[1]['status'] = false
  }
  // Rule: at least 4 characters
  if (text.length > 3) {
    emailValidationData[2]['status'] = true
  } else {
    emailValidationData[2]['status'] = false
  }

  // render
  let validationsList = `
  <ul>
    ${emailValidationData.map(validation =>
    (validation.status) ? `<li class="green">${validation.name}</li>` : `<li class="red">${validation.name}</li>`
  ).join("")}
  </ul>
  `

  $('#validations').html(validationsList)
}

let emailValidationData = [
  { rid: 1, name: 'email has @ symbol', status: false },
  { rid: 2, name: 'email has at least one . symbol', status: false },
  { rid: 3, name: 'email is atleast 4 characters long', status: false },
]
