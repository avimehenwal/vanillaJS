import { $ } from '../modules/jQuery.js';
var form = "\n<div class=form-container>\n  <form action=\"#\" name=\"registerEmail\">\n    <label for=\"name\">Enter your name</label>\n    <input aria-label=\"Name\" name=\"name\" type=\"text\"><br>\n\n    <label for=\"email\">Enter your Email</label>\n    <input aria-label=\"Email address\" name=\"email\" type=\"text\" required><br>\n\n    <label for=\"gdpr\">Do you agree to give give us your email</label>\n    <input aria-label=\"gdpr\" name=\"gdpr\" type=\"checkbox\" required><br>\n\n    <button type=\"submit\">Submit</button>\n\n    <div id=\"validations\"></div>\n  </form>\n</div>\n";
$('main').html(form);
function exactlyOnceAtSymbol(text) { return /@/.test(text); }
function minimumOneDotSymbol(text) { return /\./.test(text); }
function minimum4CharsLong(text) { (text.length > 3) ? true : false; }
// @ts-ignore */
var name = document.forms[0].name;
name === null || name === void 0 ? void 0 : name.addEventListener('input', validateName);
// @ts-ignore */
var email = document.forms[0].email;
email === null || email === void 0 ? void 0 : email.addEventListener('input', validateEmail);
var nameValidationData = [
    { rid: 1, name: 'no special symbols in name', status: false },
    { rid: 2, name: 'name is atleast 2 characters long', status: false },
    { rid: 3, name: 'no numbers in name', status: false },
];
function validateName() {
    var text = this.value.toString();
    if (/^\w+$/.test(text)) {
        nameValidationData[0]['status'] = true;
    }
    else {
        nameValidationData[0]['status'] = false;
    }
    if (text.length > 1) {
        nameValidationData[1]['status'] = true;
    }
    else {
        nameValidationData[1]['status'] = false;
    }
    if (!/\d/.test(text)) {
        nameValidationData[2]['status'] = true;
    }
    else {
        nameValidationData[2]['status'] = false;
    }
    // render
    var validationsList = "\n  <ul>\n    " + nameValidationData.map(function (validation) {
        return (validation.status) ? "<li class=\"green\">" + validation.name + "</li>" : "<li class=\"red\">" + validation.name + "</li>";
    }).join("") + "\n  </ul>\n  ";
    $('#validations').html(validationsList);
}
function validateEmail() {
    var text = this.value.toString();
    // console.log(JSON.stringify(emailValidationData[2]) + text)
    if (exactlyOnceAtSymbol(text)) {
        emailValidationData[0]['status'] = true;
    }
    else {
        emailValidationData[0]['status'] = false;
    }
    if (minimumOneDotSymbol(text)) {
        emailValidationData[1]['status'] = true;
    }
    else {
        emailValidationData[1]['status'] = false;
    }
    // Rule: at least 4 characters
    if (text.length > 3) {
        emailValidationData[2]['status'] = true;
    }
    else {
        emailValidationData[2]['status'] = false;
    }
    // render
    var validationsList = "\n  <ul>\n    " + emailValidationData.map(function (validation) {
        return (validation.status) ? "<li class=\"green\">" + validation.name + "</li>" : "<li class=\"red\">" + validation.name + "</li>";
    }).join("") + "\n  </ul>\n  ";
    $('#validations').html(validationsList);
}
var emailValidationData = [
    { rid: 1, name: 'email has @ symbol', status: false },
    { rid: 2, name: 'email has at least one . symbol', status: false },
    { rid: 3, name: 'email is atleast 4 characters long', status: false },
];
//# sourceMappingURL=project3.js.map