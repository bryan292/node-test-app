const http = require('http');
const hostname = '0.0.0.0';
const port = 3000;
const appEnv = process.env.APP_ENV || 'No env specified';

console.log('Starting server...');

const server = http.createServer((req, res) => {
    console.log('Received request:', req.headers);
    res.statusCode = 200;
    res.end(`<html><body><h1>Hello, World ${appEnv}</h1></body></html>`);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});