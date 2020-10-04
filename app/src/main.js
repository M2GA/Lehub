// MODULES
const { ipcRenderer } = require('electron')
const { readdirSync, readFileSync } = require('fs');
const { process } = require('child_process');
const { log } = require('console');

// DATA
const resp = readFileSync('./db/db.json', 'UTF-8');

// IMPORT
import { showGames } from '../../functions/showGames.js'

// ELEMENTS
var main = document.getElementById('main');
var form = document.querySelector('form');
var searchEL = document.getElementById('search');
var modal = document.getElementById("myModal");
var add_btn = document.getElementById('add_btn');
var change_type = document.getElementById('change_type');
var a_btn = document.getElementById('a-btn');

//FUNCTIONS
showGames(resp);

// Events Listener
add_btn.addEventListener('click', () => {
  ipcRenderer.send('open-file-dialog', 'true')
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const searchTerm = searchEL.value;
  console.log(searchTerm);
  search(searchTerm);
  form.reset();
});

change_type.addEventListener('click', (e) => {
  e.preventDefault();
  El();
});

a_btn.addEventListener('click', (e) => {
  modal.style.display = "block";
});

window.addEventListener('click', (e) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
})

// IPC
ipcRenderer.on('selectedFile', (e, args) => {
});