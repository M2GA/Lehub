'use strict';

// MODULES
const { ipcRenderer, shell } = require('electron');
const os = require('os-utils');
const { readFileSync } = require('fs');

// DATA
const connect = navigator.onLine;
export { connect };
const games = readFileSync('./db/games.json', 'UTF-8');

// IMPORT
import { showGames } from '../../functions/showGames.js'
import { searchGames } from '../../functions/searchGames.js';

// ELEMENTS
var cpu = document.getElementById('cpu');
var ram = document.getElementById('ram');
var searchForm = document.getElementById('searchForm');
var searchInput = document.getElementById('searchInput');
var addGames = document.getElementById('addGames');

//FUNCTIONS
console.log(connect ? 'online' : 'offline');
showGames(games);

// Events Listener
addGames.addEventListener('click', (e) => {
  e.preventDefault();
  ipcRenderer.send('open-file-dialog', 'true');
});

setInterval( () => {
  os.cpuUsage( (v) => {
    cpu.innerHTML = 'CPU ' + (v*100).toFixed(2) + '%';
    ram.innerHTML = 'RAM ' + (os.freememPercentage()*100).toFixed(2) + '%';
  })
},1000);

searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  let searchTerm = searchInput.value;
  searchGames(searchTerm);
  searchForm.reset();
});

// IPC
ipcRenderer.on('selectedFile', (e, args) => {
  shell.openPath(args[0]);
});