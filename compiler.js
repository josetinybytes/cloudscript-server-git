const fs = require('fs');
const path = require('path');
module.exports = (location) => {
    let files = fs.readdirSync(location);
    let outFile = `
const server = require('./cloudscript-libs/playfab-server-sync.js');
const http = require('./cloudscript-libs/http-sync.js');
const entity = require('./cloudscript-libs/playfab-entity-sync.js');
let handlers = {};`
    for (let file of files) {
        if (!file.includes('.js'))
            continue;
        if (file.indexOf('.') == 0)
            continue;
        outFile += fs.readFileSync(path.join(location, file), 'utf-8');
        outFile += '\n';
    }
    outFile += 'module.exports = handlers;\n';
    fs.writeFileSync(path.join(__dirname, './cloudscript.js'), outFile);
}