const http = require('http');

http.createServer((req,res)=>{
    res.writeHead(200,{
        "Access-Control-Allow-Origin":"*",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials":"true"
        });
    res.end('Hello World');
}).listen(3000);