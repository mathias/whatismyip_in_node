var http = require('http');
var sys = require('sys');

http.createServer(function (req, res) {
  var ip_address = req.connection.remoteAddress;

  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(ip_address + '\n');
  console.log('Request from ' + ip_address);
}).listen(1337, "127.0.0.1");

console.log('Server running at http://127.0.0.1:1337/');
