const { ipcRenderer } = require('electron')
const { readdirSync, readFileSync } = require('fs');
const { process } = require('child_process')


const main = document.getElementById('main');
const form = document.querySelector('form');
const searchEL = document.getElementById('search');

const add_btn = document.getElementById('add_btn');
const change_type = document.getElementById('change_type');

add_btn.addEventListener('click', () => {
 ipcRenderer.send('open-file-dialog', 'true')
})

ipcRenderer.on('selectedFile', (e, args) => {
});

getGames();

async function getGames(data) {
  const resp = readFileSync('expo.json', 'UTF-8');
  const respData = JSON.parse(resp);

  showGames(respData);

  if (data) {
    showGames(data);
  }

  return respData;
};

function showGames(games) {

  //Clear main
  main.innerHTML = '';

  for (const key in games) {
    if (games.hasOwnProperty(key)) {
      //respData[data].name
      const gamesEl = document.createElement('div');
      gamesEl.classList.add('games');
      gamesEl.innerHTML = `
      <img src="${games[key].img}">
      <div class="overview box-shadow">
          <button id="play" class="btn btn-warning box-shadow">JOUER</button>
      </div>`;
      main.appendChild(gamesEl);
    }
  }
}

function login(data) {
  if (!data) {
    return;
  };
  getAccount(data);
};

function getAccount(data) {

  // Pour le login

  return data;
}

async function search(term) {
}

function El() {
  let current = 0;

  console.log(current);

  if (current === 1) {
    console.log('nikum');
    current--;
  }else if (current === 0) {
    console.log('lol');
    current++;
  };

  console.log(current);
};

// Event Listner

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

const play = document.querySelector('#play');

play.addEventListener('click', (e) => {
  console.log('fuck');
})