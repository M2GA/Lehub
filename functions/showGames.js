import { getGames } from './getGames.js';

async function showGames(data) {
  if (!data) return;

  let games = await getGames(data);

  // Clear main
  view.innerHTML = '';
  
  for (const key in games) {
    if (games.hasOwnProperty(key)) {
      if (key == "last") return;
      //respData[data].name
      const gamesEl = document.createElement('div');
      gamesEl.classList.add('games');
      gamesEl.innerHTML = `
      <img class="box-shadow" src="${games[key].img}">
      <div class="overview box-shadow">
          <button id="play" class="btn btn-warning box-shadow" data-key=${key}>JOUER</button>
          <button id="settings" class="btn btn-secondary box-shadow" data-key=${key}>Fichiers du jeu</button>
      </div>`;
      view.appendChild(gamesEl);
    };
  };
};

export { showGames };