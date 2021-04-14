import { $ } from '../modules/jQuery.js'

function callFizzBuzz(e) {
  // console.dir(e)
  // console.log(e.target.number.value)
  fizzBuzz(e.target.number.value)
  e.preventDefault()
}

let html = `
<div>
  <form name="fizzbuzz">
    <label for="number">Enter some number</label>
    <input type="text" name="number" placeholder="integer number" required>
    <input type="submit" value="Submit">
  </form>

  <h5>validation rules</h5>
  <div id="validations"></div>
  <div id="results" class="grid"></div>
</div>
`
$('main').html(html)

// input validations

let number = <HTMLInputElement>document.forms[0].number
number?.addEventListener('input', validateNumber)

let form = document.forms[0]
form.addEventListener('submit', callFizzBuzz)

let validationRules = [
  { rid: 1, text: 'should be a number', status: false },
  { rid: 2, text: 'should be positive integer', status: false },
  { rid: 3, text: 'cannot be floating point', status: false },
]

function validateNumber(this) {
  let value = this.value.toString()
  if (/^\d+/.test(value)) { validationRules[0]['status'] = true } else { validationRules[0]['status'] = false }
  if (parseInt(value) > 0) { validationRules[1]['status'] = true } else { validationRules[1]['status'] = false }
  if (!/\./.test(value)) { validationRules[2]['status'] = true } else { validationRules[2]['status'] = false }

  // re-render
  let validationsList = `
  <ul>
    ${validationRules.map(validation =>
    (validation.status) ? `<li class="green">${validation.text}</li>` : `<li class="red">${validation.text}</li>`
  ).join("")}
  </ul>
  `
  $('#validations').html(validationsList)
}

function fizzBuzz(number) {
  let results: Array<string> = []
  for (let i = 1; i <= number; i++) {
    let output = ''
    switch (true) {
      case (i % 5 === 0 && i % 3 === 0):
        output = "FizzBuzz"
        break;
      case i % 3 === 0:
        output = "Fizz"
        break;
      case i % 5 === 0:
        output = "Buzz"
        break;
      default:
        output = i.toString()
        break;
    }
    // console.log(i, output)
    results.push(output)

  }

  // render
  let divWrapResults = ''
  results.map(result => {
    if (/^\d$/.test(result)) {
      divWrapResults += `<div>${result}</div>`
    } else {
      divWrapResults += `<div class="${result}">${result}</div>`
    }
  })
  console.log(divWrapResults);
  $('#results').html(divWrapResults)
}