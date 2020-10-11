const { readdirSync, readFileSync } = require('fs');

// DATA
const dataGames = readFileSync('./db/friends.json', 'UTF-8');

async function getFriends(data) {
    if (!data) return;
    const resp = JSON.parse(data);
    return resp;
};

export { getFriends };