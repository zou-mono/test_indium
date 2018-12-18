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
var a = 5;
console.log("start...");
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');
