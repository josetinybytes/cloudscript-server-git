const server = require('playfab-sdk').PlayFabServer;
const loop = require('deasync').runLoopOnce;

class PlayFabApiError extends Error {
    constructor(message, data) {
        super(message);
        this.data = data;
    }
}
exports.AddCharacterVirtualCurrency = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.AddCharacterVirtualCurrency(request, (err, data) => {
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

exports.AddCharacterVirtualCurrency = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.AddCharacterVirtualCurrency(request, (err, data) => {
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

exports.AddFriend = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.AddFriend(request, (err, data) => {
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

exports.AddGenericID = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.AddGenericID(request, (err, data) => {
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

exports.AddPlayerTag = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.AddPlayerTag(request, (err, data) => {
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

exports.AddSharedGroupMembers = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.AddSharedGroupMembers(request, (err, data) => {
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

exports.AddUserVirtualCurrency = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.AddUserVirtualCurrency(request, (err, data) => {
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

exports.AuthenticateSessionTicket = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.AuthenticateSessionTicket(request, (err, data) => {
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

exports.AwardSteamAchievement = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.AwardSteamAchievement(request, (err, data) => {
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

exports.BanUsers = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.BanUsers(request, (err, data) => {
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

exports.ConsumeItem = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.ConsumeItem(request, (err, data) => {
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

exports.CreateSharedGroup = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.CreateSharedGroup(request, (err, data) => {
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

exports.DeleteCharacterFromUser = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.DeleteCharacterFromUser(request, (err, data) => {
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

exports.DeletePlayer = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.DeletePlayer(request, (err, data) => {
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

exports.DeletePushNotificationTemplate = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.DeletePushNotificationTemplate(request, (err, data) => {
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

exports.DeleteSharedGroup = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.DeleteSharedGroup(request, (err, data) => {
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

exports.DeregisterGame = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.DeregisterGame(request, (err, data) => {
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

exports.EvaluateRandomResultTable = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.EvaluateRandomResultTable(request, (err, data) => {
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

exports.ExecuteCloudScript = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.ExecuteCloudScript(request, (err, data) => {
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

exports.GetAllSegments = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.GetAllSegments(request, (err, data) => {
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

exports.GetAllUsersCharacters = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.GetAllUsersCharacters(request, (err, data) => {
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

exports.GetCatalogItems = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.GetCatalogItems(request, (err, data) => {
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

exports.GetCharacterData = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.GetCharacterData(request, (err, data) => {
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

exports.GetCharacterInternalData = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.GetCharacterInternalData(request, (err, data) => {
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

exports.GetCharacterInventory = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.GetCharacterInventory(request, (err, data) => {
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

exports.GetCharacterLeaderboard = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.GetCharacterLeaderboard(request, (err, data) => {
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

exports.GetCharacterReadOnlyData = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.GetCharacterReadOnlyData(request, (err, data) => {
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

exports.GetCharacterStatistics = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.GetCharacterStatistics(request, (err, data) => {
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

exports.GetContentDownloadUrl = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.GetContentDownloadUrl(request, (err, data) => {
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

exports.GetFriendLeaderboard = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.GetFriendLeaderboard(request, (err, data) => {
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

exports.GetFriendsList = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.GetFriendsList(request, (err, data) => {
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

exports.GetLeaderboard = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.GetLeaderboard(request, (err, data) => {
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

exports.GetLeaderboardAroundCharacter = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.GetLeaderboardAroundCharacter(request, (err, data) => {
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

exports.GetLeaderboardAroundUser = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.GetLeaderboardAroundUser(request, (err, data) => {
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

exports.GetLeaderboardForUserCharacters = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.GetLeaderboardForUserCharacters(request, (err, data) => {
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

exports.GetPlayerCombinedInfo = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.GetPlayerCombinedInfo(request, (err, data) => {
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

exports.GetPlayerProfile = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.GetPlayerProfile(request, (err, data) => {
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

exports.GetPlayerSegments = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.GetPlayerSegments(request, (err, data) => {
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

exports.GetPlayersInSegment = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.GetPlayersInSegment(request, (err, data) => {
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

exports.GetPlayerStatistics = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.GetPlayerStatistics(request, (err, data) => {
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

exports.GetUserStatistics = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.GetPlayerStatistics(request, (err, data) => {
        error = err;
        response = data?.data;
    });
    while (error == null && response == null) {
        loop();
    }
    if (error != null) {
        throw new PlayFabApiError(error.error, error);
    }

    let UserStatistics = {};
    for (let sta of response.Statistics) {
        UserStatistics[sta.StatisticName] = sta.Value;
    }
    return { UserStatistics };
};

exports.GetPlayerStatisticVersions = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.GetPlayerStatisticVersions(request, (err, data) => {
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

exports.GetPlayerTags = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.GetPlayerTags(request, (err, data) => {
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

exports.GetPlayFabIDsFromFacebookIDs = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.GetPlayFabIDsFromFacebookIDs(request, (err, data) => {
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

exports.GetPlayFabIDsFromFacebookInstantGamesIds = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.GetPlayFabIDsFromFacebookInstantGamesIds(request, (err, data) => {
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

exports.GetPlayFabIDsFromGenericIDs = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.GetPlayFabIDsFromGenericIDs(request, (err, data) => {
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

exports.GetPlayFabIDsFromNintendoSwitchDeviceIds = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.GetPlayFabIDsFromNintendoSwitchDeviceIds(request, (err, data) => {
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

exports.GetPlayFabIDsFromPSNAccountIDs = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.GetPlayFabIDsFromPSNAccountIDs(request, (err, data) => {
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

exports.GetPlayFabIDsFromSteamIDs = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.GetPlayFabIDsFromSteamIDs(request, (err, data) => {
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

exports.GetPlayFabIDsFromXboxLiveIDs = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.GetPlayFabIDsFromXboxLiveIDs(request, (err, data) => {
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

exports.GetPublisherData = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.GetPublisherData(request, (err, data) => {
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

exports.GetRandomResultTables = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.GetRandomResultTables(request, (err, data) => {
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

exports.GetServerCustomIDsFromPlayFabIDs = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.GetServerCustomIDsFromPlayFabIDs(request, (err, data) => {
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

exports.GetSharedGroupData = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.GetSharedGroupData(request, (err, data) => {
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

exports.GetStoreItems = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.GetStoreItems(request, (err, data) => {
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

exports.GetTime = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.GetTime(request, (err, data) => {
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

exports.GetTitleData = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.GetTitleData(request, (err, data) => {
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

exports.GetTitleInternalData = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.GetTitleInternalData(request, (err, data) => {
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

exports.GetTitleNews = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.GetTitleNews(request, (err, data) => {
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

exports.GetUserAccountInfo = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.GetUserAccountInfo(request, (err, data) => {
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

exports.GetUserBans = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.GetUserBans(request, (err, data) => {
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

exports.GetUserData = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.GetUserData(request, (err, data) => {
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

exports.GetUserInternalData = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.GetUserInternalData(request, (err, data) => {
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

exports.GetUserInventory = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.GetUserInventory(request, (err, data) => {
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

exports.GetUserPublisherData = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.GetUserPublisherData(request, (err, data) => {
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

exports.GetUserPublisherInternalData = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.GetUserPublisherInternalData(request, (err, data) => {
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

exports.GetUserPublisherReadOnlyData = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.GetUserPublisherReadOnlyData(request, (err, data) => {
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

exports.GetUserReadOnlyData = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.GetUserReadOnlyData(request, (err, data) => {
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

exports.GrantCharacterToUser = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.GrantCharacterToUser(request, (err, data) => {
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

exports.GrantItemsToCharacter = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.GrantItemsToCharacter(request, (err, data) => {
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

exports.GrantItemsToUser = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.GrantItemsToUser(request, (err, data) => {
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

exports.GrantItemsToUsers = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.GrantItemsToUsers(request, (err, data) => {
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

exports.LinkPSNAccount = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.LinkPSNAccount(request, (err, data) => {
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

exports.LinkServerCustomId = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.LinkServerCustomId(request, (err, data) => {
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

exports.LinkXboxAccount = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.LinkXboxAccount(request, (err, data) => {
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

exports.LoginWithServerCustomId = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.LoginWithServerCustomId(request, (err, data) => {
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

exports.LoginWithSteamId = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.LoginWithSteamId(request, (err, data) => {
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

exports.LoginWithXbox = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.LoginWithXbox(request, (err, data) => {
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

exports.LoginWithXboxId = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.LoginWithXboxId(request, (err, data) => {
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

exports.ModifyItemUses = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.ModifyItemUses(request, (err, data) => {
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

exports.MoveItemToCharacterFromCharacter = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.MoveItemToCharacterFromCharacter(request, (err, data) => {
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

exports.MoveItemToCharacterFromUser = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.MoveItemToCharacterFromUser(request, (err, data) => {
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

exports.MoveItemToUserFromCharacter = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.MoveItemToUserFromCharacter(request, (err, data) => {
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

exports.NotifyMatchmakerPlayerLeft = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.NotifyMatchmakerPlayerLeft(request, (err, data) => {
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

exports.RedeemCoupon = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.RedeemCoupon(request, (err, data) => {
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

exports.RedeemMatchmakerTicket = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.RedeemMatchmakerTicket(request, (err, data) => {
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

exports.RefreshGameServerInstanceHeartbeat = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.RefreshGameServerInstanceHeartbeat(request, (err, data) => {
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

/**
 * @deprecated Do not use
 */
exports.RegisterGame = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.RegisterGame(request, (err, data) => {
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

exports.RemoveFriend = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.RemoveFriend(request, (err, data) => {
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

exports.RemoveGenericID = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.RemoveGenericID(request, (err, data) => {
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

exports.RemovePlayerTag = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.RemovePlayerTag(request, (err, data) => {
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

exports.RemoveSharedGroupMembers = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.RemoveSharedGroupMembers(request, (err, data) => {
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

exports.ReportPlayer = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.ReportPlayer(request, (err, data) => {
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

exports.RevokeAllBansForUser = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.RevokeAllBansForUser(request, (err, data) => {
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

exports.RevokeBans = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.RevokeBans(request, (err, data) => {
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

exports.RevokeInventoryItem = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.RevokeInventoryItem(request, (err, data) => {
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

exports.RevokeInventoryItems = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.RevokeInventoryItems(request, (err, data) => {
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

exports.SavePushNotificationTemplate = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.SavePushNotificationTemplate(request, (err, data) => {
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

exports.SendCustomAccountRecoveryEmail = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.SendCustomAccountRecoveryEmail(request, (err, data) => {
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

exports.SendEmailFromTemplate = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.SendEmailFromTemplate(request, (err, data) => {
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

exports.SendPushNotification = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.SendPushNotification(request, (err, data) => {
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

exports.SendPushNotificationFromTemplate = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.SendPushNotificationFromTemplate(request, (err, data) => {
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

exports.SetFriendTags = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.SetFriendTags(request, (err, data) => {
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

exports.SetGameServerInstanceData = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.SetGameServerInstanceData(request, (err, data) => {
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

exports.SetGameServerInstanceState = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.SetGameServerInstanceState(request, (err, data) => {
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

exports.SetGameServerInstanceTags = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.SetGameServerInstanceTags(request, (err, data) => {
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

exports.SetPlayerSecret = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.SetPlayerSecret(request, (err, data) => {
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

exports.SetPublisherData = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.SetPublisherData(request, (err, data) => {
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

exports.SetTitleData = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.SetTitleData(request, (err, data) => {
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

exports.SetTitleInternalData = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.SetTitleInternalData(request, (err, data) => {
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

exports.SubtractCharacterVirtualCurrency = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.SubtractCharacterVirtualCurrency(request, (err, data) => {
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

exports.SubtractUserVirtualCurrency = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.SubtractUserVirtualCurrency(request, (err, data) => {
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

exports.UnlinkPSNAccount = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.UnlinkPSNAccount(request, (err, data) => {
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

exports.UnlinkServerCustomId = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.UnlinkServerCustomId(request, (err, data) => {
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

exports.UnlinkXboxAccount = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.UnlinkXboxAccount(request, (err, data) => {
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

exports.UnlockContainerInstance = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.UnlockContainerInstance(request, (err, data) => {
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

exports.UnlockContainerItem = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.UnlockContainerItem(request, (err, data) => {
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

exports.UpdateAvatarUrl = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.UpdateAvatarUrl(request, (err, data) => {
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

exports.UpdateBans = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.UpdateBans(request, (err, data) => {
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

exports.UpdateCharacterData = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.UpdateCharacterData(request, (err, data) => {
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

exports.UpdateCharacterInternalData = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.UpdateCharacterInternalData(request, (err, data) => {
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

exports.UpdateCharacterReadOnlyData = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.UpdateCharacterReadOnlyData(request, (err, data) => {
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

exports.UpdateCharacterStatistics = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.UpdateCharacterStatistics(request, (err, data) => {
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

exports.UpdatePlayerStatistics = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.UpdatePlayerStatistics(request, (err, data) => {
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

exports.UpdateUserStatistics = function (request) {
    global.apiRequestCount++;
    let Statistics = [];
    for (let key in request.UserStatistics) {
        Statistics.push({
            StatisticName: key,
            Value: request.UserStatistics[key]
        });
    }
    request = { Statistics, PlayFabId: request.PlayFabId };
    let error = null;
    let response = null;
    server.UpdatePlayerStatistics(request, (err, data) => {
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

exports.UpdateSharedGroupData = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.UpdateSharedGroupData(request, (err, data) => {
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

exports.UpdateUserData = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.UpdateUserData(request, (err, data) => {
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

exports.UpdateUserInternalData = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.UpdateUserInternalData(request, (err, data) => {
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

exports.UpdateUserInventoryItemCustomData = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.UpdateUserInventoryItemCustomData(request, (err, data) => {
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

exports.UpdateUserPublisherData = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.UpdateUserPublisherData(request, (err, data) => {
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

exports.UpdateUserPublisherInternalData = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.UpdateUserPublisherInternalData(request, (err, data) => {
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

exports.UpdateUserPublisherReadOnlyData = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.UpdateUserPublisherReadOnlyData(request, (err, data) => {
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

exports.UpdateUserReadOnlyData = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.UpdateUserReadOnlyData(request, (err, data) => {
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

exports.WriteCharacterEvent = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.WriteCharacterEvent(request, (err, data) => {
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

exports.WritePlayerEvent = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.WritePlayerEvent(request, (err, data) => {
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

exports.WriteTitleEvent = function (request) {
    global.apiRequestCount++;
    let error = null;
    let response = null;
    server.WriteTitleEvent(request, (err, data) => {
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