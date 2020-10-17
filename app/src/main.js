'use strict';

// MODULES
const { ipcRenderer } = require('electron');
const os = require('os-utils');
const { readFileSync } = require('fs');

// DATA
const connect = navigator.onLine;
const games = readFileSync('./db/games.json', 'UTF-8');
const friends = readFileSync('./db/friends.json', 'UTF-8');

// IMPORT
import { showGames } from '../../functions/showGames.js'
import { showFriends } from '../../functions/showFriends.js'

// ELEMENTS
var cpu = document.getElementById('cpu');
var searchForm = document.getElementById('searchForm');
var changeView = document.getElementById('changeView');

//FUNCTIONS
console.log(connect ? 'online' : 'offline');
showGames(games);

// Events Listener

//addGames.addEventListener('click', (e) => {
//  ipcRenderer.send('open-file-dialog', 'true');
//});

setInterval( () => {
  os.cpuUsage( (v) => {
    cpu.innerHTML = 'CPU ' + v.toFixed(2)*10;
  })
},1000);

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