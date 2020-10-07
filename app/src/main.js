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
var html = document.querySelector('html');
var main = document.getElementById('main');
var home = document.getElementById('home');
var friendList = document.getElementById('friendList');
var friendListButton = document.getElementById('friendListButton');
var addFriend = document.getElementById('addFriend');
var addFriendButton = document.getElementById('addFriendButton');
var sideBar = document.getElementById('sidebar')
var searchForm = document.getElementById('searchForm');
var searchInput = document.getElementById('searchInput');
var settingButton = document.getElementById('settingButton');
var modal = document.getElementById("modal");
var addGames = document.getElementById('addGames');
var changeView = document.getElementById('changeView');
var aBtn = document.getElementById('aBtn');

//FUNCTIONS
showGames(resp);

// Events Listener
home.addEventListener('click', (e) => {
  e.preventDefault();
  showGames(resp);
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

addFriendButton.addEventListener('click', (e) => {
  addFriend.style.display = "block";
});

friendList.addEventListener('click', (e) => {
  
})

window.addEventListener('click', (e) => {
  console.log(event.target);
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