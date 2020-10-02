//TODO, [DESIGN] [BUG] les buttons sortent de l'écran.
//TODO, [DEV] Rendre les buttons l'ors de la selection du jeu.
//TODO, [DEV] Attacher un EventListner (*Avec une boucle) sur tout les button de jeux.
//TODO, [URGENT] Crée un localstorage.
//TODO,
//TODO,
//TODO,
//TODO,
//TODO,
//TODO,
//TODO,
//TODO,
//TODO,
//TODO,
//TODO,
//TODO,
//TODO,
//TODO,
//TODO,
//TODO,
//TODO,
//TODO,
//TODO,
//TODO,
//TODO,
//TODO,
//TODO,
//TODO,
//TODO,
//TODO,
//TODO,
//TODO,
//TODO,
//TODO,
//TODO,
//TODO,
//TODO,
//TODO,
//TODO,
//TODO,
//TODO,
//TODO,
//TODO,
//TODO,
//TODO,


for (const data in games['GAMES']) {
  console.log(data);
  var btn = document.createElement('button');
  btn.innerHTML = data ? data.name : "LE HUB";
  div.appendChild(btn);
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('salut');
  });
};