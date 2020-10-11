// MODULES
const { ipcRenderer } = require('electron');
const { readFileSync } = require('fs');

// DATA
const games = readFileSync('./db/games.json', 'UTF-8');
const friends = readFileSync('./db/friends.json', 'UTF-8');

// IMPORT
import { showGames } from '../../functions/showGames.js'
import { showFriends } from '../../functions/showFriends.js'

// ELEMENTS
var html = document.querySelector('html');
var main = document.getElementById('main');
var home = document.getElementById('home');
var tabButtons = document.querySelectorAll('.tab-btn button');
var sideBar = document.getElementById('sidebar')
var searchForm = document.getElementById('searchForm');
var searchInput = document.getElementById('searchInput');
var settingButton = document.getElementById('settingButton');
var modal = document.getElementById("modal");
var addGames = document.getElementById('addGames');
var changeView = document.getElementById('changeView');
var aBtn = document.getElementById('aBtn');

//FUNCTIONS
showGames(games);
showFriends(friends);

// Events Listener
home.addEventListener('click', (e) => {
  e.preventDefault();
  showGames(games);
})

addGames.addEventListener('click', (e) => {
  ipcRenderer.send('open-file-dialog', 'true');
});

searchForm.addEventListener('submit', (e) => {
  const searchTerm = searchEL.value;
  console.log(searchTerm);
  form.reset();
});

changeView.addEventListener('click', (e) => {
  e.preventDefault();
});

aBtn.addEventListener('click', (e) => {
  e.preventDefault();
  
  modal.style.display = "block";
});

settingButton.addEventListener('click', (e) => {
  main.innerHTML = '';
  modal.style.display = "none";
});

tabButtons.forEach(btn => {
  console.log(btn.index);
  btn.addEventListener('click', () => {
    // si il l'à on fait rien sinon on lui rajoute et on le supprie au autres
    console.log(btn.id);
    if (btn.classList.contains('active')) return;
  });
});

window.addEventListener('click', (e) => {
  if (event.target == main ) {
    modal.style.display = "none";
  };
  if (event.target == sideBar) {
    modal.style.display = "none";
  };
  if (event.target == html) {
    modal.style.display = "none";
  };
});

// IPC
ipcRenderer.on('selectedFile', (e, args) => {
});