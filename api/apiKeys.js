// api/apiKeys.js
export const api = {
    velixs: 'apikey',
    beta: 'apikey',
    lolhuman: 'apikey',
    fgmods: 'apikey',
    botcahx: 'apikey',
};

export function apiData(provider) {
    const key = api[provider];
    if (!key) {
        throw new Error(`Provider "${provider}" not found.`);
    }
    return key;
}
