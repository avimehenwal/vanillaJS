import { $ } from './modules/jQuery.js';
var form = "\n<div class=form-container>\n<form action=\"#\" name=\"registerEmail\">\n  <label for=\"name\">Enter your name</label>\n  <input aria-label=\"Name\" name=\"name\" type=\"text\"><br>\n\n  <label for=\"emai\">Enter your Email</label>\n  <input aria-label=\"Email address\" name=\"email\" type=\"password\" required><br>\n\n  <label for=\"gdpr\">Do you agree to give give us your email</label>\n  <input aria-label=\"gdpr\" name=\"gdpr\" type=\"checkbox\" required><br>\n\n  <button type=\"submit\">Submit</button>\n</form>\n</div>\n";
$('main').html(form);
