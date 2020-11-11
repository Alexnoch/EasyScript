const http = require('http');
const mysql = require('mysql');
const connection = mysql.createConnection({
    host:'31.184.249.2',
    user:'begeek',
    password:'123',
    database:'cooking_dish'
});
connection.connect();


http.createServer((req,res)=>{

    res.writeHead(200,{
        "Access-Control-Allow-Origin":"*",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials":"true"
        });
    let query_last = `SELECT * FROM first_dish`;
    connection.query(query_last,function(error,result){
        if(error) throw error;
        console.log('Сработал кейс "последний рецепт"',error)
        result = JSON.stringify(result[0]);
        res.end(result);
    });
}).listen(3000);