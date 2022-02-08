
const loop = require('deasync').runLoopOnce;
const playfab = require('playfab-sdk');
const apiMethods = require('./api-methods.json').multiplayer;
const libs = [];
for (let key in playfab) {
    switch (key) {
        case 'PlayFab':
        case 'PlayFabAdmin':
        case 'PlayFabClient':
        case 'PlayFabServer':
        case 'settings':
            continue;
        default:
            break;
    }
    libs.push(playfab[key]);
}

class PlayFabApiError extends Error {
    constructor(message, data) {
        super(message);
        this.data = data;
    }
}
function callApiMethod(request, lib, method) {
    __playfab_internal.apiCallCount++;
    let error = null;
    let response = null;
    lib[method](request, (err, data) => {
        error = err;
        response = data?.data;
    });
    while (error == null && response == null) {
        loop();
    }
    if (error != null) {
        throw new PlayFabApiError(error.error, error);
    }
    return response;
};

for (let method of apiMethods) {
    let library = libs.find(lib => lib[method] != null);
    if (library == null) {
        continue;
    }
    module.exports[method] = (req) => callApiMethod(req, library, method);
}