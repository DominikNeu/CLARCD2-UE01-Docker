const http = require('http');
const fs = require('fs');

const requestListener = function (req, res) {
    if (req.url === '/') {
        res.writeHead(200);
        res.end('Health probe sucessful!'); 
    }
    
    if (req.url === '/home') {
        fs.readFile('index.html',function (err, data){
            res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
            res.write(data);
            res.end();
        });
    }
    
    if (req.url === '/api') {
        res.writeHead(200);
        res.end('Hello from the API!'); 
    }
    
    
}

const server = http.createServer(requestListener);
server.listen(8080);