var ws = require('nodejs-websocket')
var PORT = 3000

var server = ws.createServer(function(conn){
    console.log('New connection')
    conn.on("text",function(str){
        sendAll(str);
    })
    conn.on("close",function(code,reason){
        console.log("connection closed")
    })
    conn.on("error",function(err){
        console.log("handle err")
    })
}).listen(PORT);

function sendAll(text){
    server.connections.forEach(function(connection){
        connection.sendText(text);
    })
}

console.log('websocket server listening on port ' + PORT);