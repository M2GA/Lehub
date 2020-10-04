async function getGames(data) {
    if (!data) return;
    const resp = JSON.parse(data);
    return resp;
};

export { getGames };