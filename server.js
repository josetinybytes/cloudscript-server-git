require('dotenv').config();
if (process.env['TITLE_ID'] == null) {
    console.log('missing enviroment variable TITLE_ID');
    process.exit();
}
if (process.env['TITLE_SECRET'] == null) {
    console.log('missing enviroment variable TITLE_SECRET');
    process.exit();
}
const express = require('express');
const axios = require('axios').default;
const compiler = require('./compiler.js');

const titleId = process.env['TITLE_ID'];
const directory = process.argv[3];

let cloudscript = null;
try {
    cloudscript = require('./cloudscript.js');
}
catch (e) {
    compiler.transformErrorStack(e, directory);
    console.error(e);
    process.exit();
}

async function executeCloudScript(req, res) {
    try {
        global.currentPlayerId = req.body.PlayFabId ?? req.headers['x-authorization'].split('--')[0];//doing this is faster than validating the ticket with the playfab api :P, it can fail obviously
        global.apiRequestCount = 0;
        global.httpRequestCount = 0;
        let startTime = Date.now();
        let result = cloudscript[req.body.FunctionName](req.body.FunctionParameter);
        return res.json({
            code: 200,
            status: 'OK',
            data: {
                FunctionName: req.body.FunctionName,
                Revision: 0,
                FunctionResult: result,
                APIRequestsIssued: global.apiRequestCount,
                HttpRequestsIssued: global.httpRequestCount,
                ExecutionTimeSeconds: (Date.now() - startTime) * 0.001
            }
        });
    }
    catch (e) {
        compiler.transformErrorStack(e, directory);
        console.error(e);
        if (e.data?.code != null) {
            return res.status(e.data.code).json(e.data);
        }
        if (e.stack != null)
            return res.status(500).json({ error: 'JavaScriptException', stackTrace: e.stack, code: 500 });

        return res.status(500).json({ error: 'Unknown', code: 500 });
    }
}

const app = express();

app.use(express.json());

app.post('/Client/ExecuteCloudScript', executeCloudScript);
app.post('/Server/ExecuteCloudScript', executeCloudScript);

//proxy every other request to playfab api
app.use('*', async (req, res) => {
    try {
        let route = req.params[0];
        let url = `https://${titleId}.playfabapi.com${route}`;
        let headers = {};
        for (let key in req.headers) {
            if (key == 'host')
                continue;
            if (key == 'connection')
                continue;
            if (key == 'content-length')
                continue;
            if (key.includes('encoding'))
                continue;
            headers[key] = req.headers[key];
        }
        let response = await axios({
            headers: headers,
            url: url,
            method: req.method,
            data: req.body
        });
        let responseHeaders = response.headers;
        for (let key in responseHeaders) {
            res.setHeader(key, responseHeaders[key]);
        }
        res.status(response.status).json(response.data);
    }
    catch (e) {
        console.error(e);
        res.status(e.response.status).json(e.response.data);
    }
});

async function startServer() {
    let playfab = require('playfab-sdk');
    playfab.settings.titleId = process.env['TITLE_ID'];
    playfab.settings.developerSecretKey = process.env['TITLE_SECRET'];
    let res = await require('util').promisify(playfab.PlayFabAuthentication.GetEntityToken)({});
    playfab.settings.entityToken = res.data.EntityToken;
    let port = parseInt(process.argv[2]);
    app.listen(port);
    console.log("server started at port: " + port);
}
startServer();