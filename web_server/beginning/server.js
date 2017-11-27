var http = require('http');
var server = http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('<h2>Hello node.js</h2>\n');
});
server.listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');