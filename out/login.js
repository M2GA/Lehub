'use strict';

// IMPORT
import { login } from './lehub/api/index.js';

var btn = document.getElementById('login');
var form = document.forms['login'];
var mail = form.elements.email;
var pass = form.elements.password;

btn.addEventListener('click', (e) => {
  e.preventDefault();
  if (!mail.value || !pass.value || !mail.value && !pass.value) return console.log('No data!');
  login(mail.value, pass.value);
  mail.disabled = true;
  pass.disabled = true;
});