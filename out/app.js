'use strict';
// MODULES
const { ipcRenderer, shell } = require('electron');
const os                     = require('os-utils');
const fs                     = require('fs');

// DATA
const games = fs.readFileSync('./db/games.json', 'UTF-8');
const connect = navigator.onLine;
export { connect };

// IMPORT
import { gamesList } from './lehub/js/games.js';

// ELEMENTS
var cpu = document.getElementById('cpu');
var ram = document.getElementById('ram');
var searchForm = document.getElementById('searchForm');
var searchInput = document.getElementById('searchInput');

//FUNCTIONS
gamesList(games);

// Timeout
setTimeout(() => {
  var game = document.querySelectorAll('div.games');
  game.forEach(el => {
    el.addEventListener('click', (e) => {
      var modal = document.getElementById('g' + el.id);
      modalGame()
      modal.style.display = 'flex';
    });
  });
  var friend = document.querySelectorAll('.friend');
  friend.forEach(el => {
    el.addEventListener('mouseenter', (e) => {
      var over = document.getElementById('f' + el.id);
      over.style.display = 'flex';
    });
    el.addEventListener('mouseleave', (e) => {
      var over = document.getElementById('f' + el.id);
      over.style.display = 'none';
    });
  });
}, 1000);

// Interval
setInterval( () => {
  os.cpuUsage( (v) => {
    cpu.innerHTML = 'CPU ' + (v*100).toFixed(2) + '%';
    ram.innerHTML = 'RAM ' + (os.freememPercentage()*100).toFixed(2) + '%';
  });
}, 1000);

// Events Listener
// addGames.addEventListener('click', (e) => {
//   e.preventDefault();
//   ipcRenderer.send('open-file-dialog');
// });

searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  let searchTerm = searchInput.value;
  searchGames(searchTerm);
  searchForm.reset();
});

ipcRenderer.on('selectedFile', (e, args) => {
  shell.beep();
});