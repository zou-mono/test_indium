// function add(a, b) {
//     Return a + b;
// }

// console.log(add(1, 2));
// function add(a,b){
//     return a + b;
// }

// console.log("ss");

// var a = 5;
// length = 6;

// console.log(add(2,3));

var http = require('http');
console.log("start...");   

var server = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(1337, '0.0.0.0');

server.on('request',function(){
  var a =7;
  console.log('收到客户端发出的请求.......');
});

// console.log('Server running at http://0.0.0.0:1337/');





