const http = require('http');
const hostname = '0.0.0.0'; // changed from localhost to 0.0.0.0
const port = 3000;
const appEnv = process.env.APP_ENV || 'No env specified';
const server = http.createServer((req, res) => {
    console.log(req.headers);
    res.statusCode = 200;
    res.end(`<html><body><h1>Hello, World ${appEnv}</h1></body></html>`); // quoation fixed by adding backticks
})
server.listen(port, hostname);
