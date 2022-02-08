
const argv = require('minimist')(process.argv.slice(2));
const compiler = require('./compiler.js');
const fs = require('fs');
const { spawn } = require('child_process');
const path = require('path');
require('colors');
let timeout = null;
let child = null;

let directory = argv.dir ?? argv.d;
if (directory != null && !path.isAbsolute(directory)) {
    directory = path.join(process.cwd(), directory);
}
else if (directory == null) {
    directory = process.cwd();
}

console.log(("Monitoring folder: " + directory + "\n").yellow);

fs.watch(directory, (eventType, filename) => {
    if (!filename.includes('.js') && !filename.includes('.env'))
        return;
    if (timeout != null) {
        clearTimeout(timeout);
    }
    timeout = setTimeout(startServer, 500);
});

process.on('SIGINT', () => {
    stopServer();
    process.exit();
});
process.on('exit', stopServer);

function stopServer() {
    if (child == null)
        return;
    console.log("Stopping server".red);
    child.kill('SIGINT');
    child = null;
}

function startServer() {
    timeout = null;

    stopServer();

    compiler.compile(directory);

    let port = argv.p ?? argv.port ?? 8080;
    child = spawn('node', [path.join(__dirname, 'server.js'), port, directory, '--color'], {
        detached: true,
        stdio: 'pipe'
    });
    child.stdout.pipe(process.stdout);
    child.stderr.pipe(process.stderr);
}
startServer();