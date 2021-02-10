'use strict';

async function getGames(data) {
  if (!data) return;
  const resp = JSON.parse(data);
  return resp;
};

async function gamesList(data) {
  if (!data) return console.log('No data !');

  let games = await getGames(data);

  // Clear main
  view.innerHTML = '';

  const div = document.createElement('div');
  div.classList.add('gameList');

  for (const key in games) {
    //if (key > 4) return;
    if (games.hasOwnProperty(key)) {
      if (key == "last") return;
      //respData[data].name
      const gameEl = document.createElement('div');
      gameEl.classList.add('games', 'box-shadow');
      gameEl.id = key;
      gameEl.innerHTML = `<img src="${games[key].img}">
      <button class="bttn play"><img src="../resources/win32/play.svg"></button>
      <button class="bttn overview"><img src="../resources/win32/options.svg"></button>`;
      view.appendChild(div)
      div.appendChild(gameEl);
    };
  };
};

async function game() {
  
};

export { gamesList, getGames };