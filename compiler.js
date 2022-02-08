const fs = require('fs');
const path = require('path');
function getFiles(location) {
    return fs.readdirSync(location)
        .filter(file => file.indexOf('.') != 0 && file.includes('.js'))
        .map(file => path.join(location, file));
}
module.exports.compile = (location) => {
    let files = getFiles(location);
    let outFile = `
const server = require('./cloudscript-libs/playfab-server-sync.js');
const http = require('./cloudscript-libs/http-sync.js');
const entity = require('./cloudscript-libs/playfab-entity-sync.js');
require('./cloudscript-libs/global-variables.js')
let handlers = {};`
    for (let file of files) {
        outFile += fs.readFileSync(file, 'utf-8');
        outFile += '\n';
    }
    outFile += 'module.exports = handlers;\n';
    fs.writeFileSync(path.join(__dirname, './cloudscript.js'), outFile);
}
function getOriginalFileLine(originalLine, location) {
    if (isNaN(originalLine))
        return null;
    let files = getFiles(location);
    let currentLine = originalLine - 6;
    for (let file of files) {
        let content = fs.readFileSync(file, 'utf-8');
        let lineCount = content.split('\n').length;
        if (currentLine > lineCount) {
            currentLine -= lineCount;
            continue;
        }
        return file + ':' + (currentLine + 1);
    }
    return null;
}
module.exports.transformErrorStack = (error, location) => {
    if (typeof error?.stack != 'string')
        return;
    let stack = error.stack;
    let cloudscriptFile = path.join(__dirname, './cloudscript.js');
    let pos = 0;
    while (true) {
        let index = stack.indexOf(cloudscriptFile, pos);
        if (index == -1)
            break;
        pos = index + 1;
        let fileEndIndex = index + cloudscriptFile.length;
        let lineDefinitionEnd = stack.indexOf(':', fileEndIndex + 1);
        let originalLine = getOriginalFileLine(parseInt(stack.substring(fileEndIndex + 1, lineDefinitionEnd)), location);
        if (originalLine != null) {
            stack = stack.slice(0, index) + originalLine + stack.slice(lineDefinitionEnd);
            pos += originalLine.length;
        }
    }
    error.stack = stack;
}