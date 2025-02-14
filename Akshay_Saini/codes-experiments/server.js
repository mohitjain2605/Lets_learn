const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = '127.0.0.1';
const port = 4000;

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('500 - Internal Server Error');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    }
    else if (req.url === "/script.js") {
          fs.readFile(path.join(__dirname, "script.js"), (err, data) => {
            if (err) {
              res.writeHead(500, { "Content-Type": "text/plain" });
              res.end("500 - Internal Server Error");
            } else {
              res.writeHead(200, { "Content-Type": "text/html" });
              res.end(data);
            }
          });
        } else {
          res.writeHead(404, { "Content-Type": "text/plain" });
          res.end("404 - Not Found");
        }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});