import { getFriends } from './getFriends.js';

async function showFriends(data) {
    if (!data) return;
  
    let friends = await getFriends(data);

    for (const key in friends) {
      if (friends.hasOwnProperty(key)) {
        //respData[data].name
        const list = document.getElementById('tab2');
        const friendEl = document.createElement('div');
        friendEl.innerHTML = `
        <div type="button" class="friendLabel box-shadow" id="friendLabel"><div id="accountName">${friends[key].name}<span class="friendSpan">#${friends[key].tag}</span></div><small>Joue à Fortnite</small></div> `
        list.appendChild(friendEl);
      };
    };
};
  
export { showFriends };