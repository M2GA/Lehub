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
var searchForm = document.getElementById('searchForm');
var searchInput = document.getElementById('searchInput');
var modal = document.getElementById("modal");
var addGames = document.getElementById('addGames');
var changeView = document.getElementById('changeView');
var aBtn = document.getElementById('aBtn');
var div = document.querySelector('div')[0];

//FUNCTIONS
showGames(resp);

// Events Listener
addGames.addEventListener('click', () => {
  ipcRenderer.send('open-file-dialog', 'true')
});

searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const searchTerm = searchEL.value;
  console.log(searchTerm);
  search(searchTerm);
  form.reset();
});

changeView.addEventListener('click', (e) => {
  e.preventDefault();
});

aBtn.addEventListener('click', (e) => {
  e.preventDefault();
  modal.style.display = "block";
});

window.addEventListener('click', (e) => {
  if (event.target == modal) {
    modal.style.display = "none";
  };
});

// IPC
ipcRenderer.on('selectedFile', (e, args) => {
});