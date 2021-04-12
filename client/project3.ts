import { $ } from './modules/jQuery.js'

let form = `
<div class=form-container>
<form action="#" name="registerEmail">
  <label for="name">Enter your name</label>
  <input aria-label="Name" name="name" type="text"><br>

  <label for="emai">Enter your Email</label>
  <input aria-label="Email address" name="email" type="password" required><br>

  <label for="gdpr">Do you agree to give give us your email</label>
  <input aria-label="gdpr" name="gdpr" type="checkbox" required><br>

  <button type="submit">Submit</button>
</form>
</div>
`

$('main').html(form)