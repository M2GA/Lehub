'use strict';

//TODO faire une gestion d'erreur

function getFriends(data) {
  if (!data) return console.log('No data !');
  const resp = JSON.parse(data);
  return resp;
};

async function friendsList(data) {

  const div = document.getElementById('tab1');
  div.innerHTML = '';

  const div2 = document.createElement('div');
  div2.classList.add('addFriend');

  const button = document.createElement('button');
  button.classList.add('bttn');

  const img = document.createElement('img');
  img.src = '../resources/win32/people.svg';

  const h6 = document.createElement('h6');
  h6.innerHTML = 'Ajouter un ami';

  button.appendChild(img);
  div2.appendChild(button);
  div2.appendChild(h6)
  div.appendChild(div2);

  if (!data) return console.log('No data !');
  let friends = await getFriends(data);

  for (const key in friends) {
    if (friends.hasOwnProperty(key)) {
      if (key == "last") return;
      const friendEl = document.createElement('div');
      friendEl.classList.add('friend');
      friendEl.id = key;
      friendEl.innerHTML = `
      <img src="${friends[key].img}">
      <h6>${friends[key].name}</h6>
      <div class="overFriend box-shadow" id="f${key}">
        <div class="head">
          <img src="${friends[key].img}">
          <h6>${friends[key].name}</h6>
          <h4>${friends[key].tag}</h4>
        </div>
        <div class="game">
        </div>
        <div class="actions">
        </div>
      </div>
      `;
      div.appendChild(friendEl);
    };
  };
};

function addFriend(data) {

};

export { friendsList, getFriends, addFriend };