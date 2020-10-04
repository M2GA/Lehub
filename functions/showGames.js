import { getGames } from './getGames.js';

async function showGames(data) {
  if (!data) return;

  let games = await getGames(data);

  // Clear main
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
    };
  };
};

export { showGames };