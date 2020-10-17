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
var searchForm = document.getElementById('searchForm');
var changeView = document.getElementById('changeView');

//FUNCTIONS
showGames(games);

// Events Listener

//addGames.addEventListener('click', (e) => {
//  ipcRenderer.send('open-file-dialog', 'true');
//});

searchForm.addEventListener('submit', (e) => {
  const searchTerm = searchEL.value;
  console.log(searchTerm);
  form.reset();
});

changeView.addEventListener('click', (e) => {
  e.preventDefault();
});

// IPC
ipcRenderer.on('selectedFile', (e, args) => {
});