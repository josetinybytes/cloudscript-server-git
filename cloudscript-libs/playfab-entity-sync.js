
const loop = require('deasync').runLoopOnce;
const playfabData = require('playfab-sdk').PlayFabData;

class PlayFabApiError extends Error {
    constructor(message, data) {
        super(message);
        this.data = data;
    }
}

exports.GetObjects = function (request) {
    __playfab_internal.apiCallCount++;
    let error = null;
    let response = null;
    playfabData.GetObjects(request, (err, data) => {
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
exports.SetObjects = function (request) {
    __playfab_internal.apiCallCount++;
    let error = null;
    let response = null;
    playfabData.SetObjects(request, (err, data) => {
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