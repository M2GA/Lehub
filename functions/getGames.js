const { readdirSync, readFileSync } = require('fs');

// DATA
const dataGames = readFileSync('./db/games.json', 'UTF-8');

async function getGames(data) {
    if (!data) return;
    const resp = JSON.parse(data);
    return resp;
};

export { getGames };