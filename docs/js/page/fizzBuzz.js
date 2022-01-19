import { $ } from '../modules/jQuery.js';
function callFizzBuzz(e) {
    // console.dir(e)
    // console.log(e.target.number.value)
    fizzBuzz(e.target.number.value);
    e.preventDefault();
}
var html = "\n<div>\n  <form name=\"fizzbuzz\">\n    <label for=\"number\">Enter some number</label>\n    <input type=\"text\" name=\"number\" placeholder=\"integer number\" required>\n    <input type=\"submit\" value=\"Submit\">\n  </form>\n\n  <h5>validation rules</h5>\n  <div id=\"validations\"></div>\n  <div id=\"results\" class=\"grid\"></div>\n</div>\n";
$('main').html(html);
// input validations
var number = document.forms[0].number;
number === null || number === void 0 ? void 0 : number.addEventListener('input', validateNumber);
var form = document.forms[0];
form.addEventListener('submit', callFizzBuzz);
var validationRules = [
    { rid: 1, text: 'should be a number', status: false },
    { rid: 2, text: 'should be positive integer', status: false },
    { rid: 3, text: 'cannot be floating point', status: false },
];
function validateNumber() {
    var value = this.value.toString();
    if (/^\d+/.test(value)) {
        validationRules[0]['status'] = true;
    }
    else {
        validationRules[0]['status'] = false;
    }
    if (parseInt(value) > 0) {
        validationRules[1]['status'] = true;
    }
    else {
        validationRules[1]['status'] = false;
    }
    if (!/\./.test(value)) {
        validationRules[2]['status'] = true;
    }
    else {
        validationRules[2]['status'] = false;
    }
    // re-render
    var validationsList = "\n  <ul>\n    " + validationRules.map(function (validation) {
        return (validation.status) ? "<li class=\"green\">" + validation.text + "</li>" : "<li class=\"red\">" + validation.text + "</li>";
    }).join("") + "\n  </ul>\n  ";
    $('#validations').html(validationsList);
}
function fizzBuzz(number) {
    var results = [];
    for (var i = 1; i <= number; i++) {
        var output = '';
        switch (true) {
            case (i % 5 === 0 && i % 3 === 0):
                output = "FizzBuzz";
                break;
            case i % 3 === 0:
                output = "Fizz";
                break;
            case i % 5 === 0:
                output = "Buzz";
                break;
            default:
                output = i.toString();
                break;
        }
        // console.log(i, output)
        results.push(output);
    }
    // render
    var divWrapResults = '';
    results.map(function (result) {
        if (/^\d$/.test(result)) {
            divWrapResults += "<div>" + result + "</div>";
        }
        else {
            divWrapResults += "<div class=\"" + result + "\">" + result + "</div>";
        }
    });
    console.log(divWrapResults);
    $('#results').html(divWrapResults);
}
//# sourceMappingURL=fizzBuzz.js.map