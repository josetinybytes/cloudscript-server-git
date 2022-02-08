const server = require('playfab-sdk').PlayFabServer;
const loop = require('deasync').runLoopOnce;

class PlayFabApiError extends Error {
    constructor(message, data) {
        super(message);
        this.data = data;
    }
}
exports.AddCharacterVirtualCurrency = function (request) {
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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
    __playfab_internal.apiCallCount++;
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