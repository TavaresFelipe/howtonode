var http = require('http');

http.createServer(function (q, r) { 

  console.log('hello');
  r.writeHead(200, {'Content-Type': 'text/plain'} );
  r.write('Hello, world!');
  r.end();
  
}).listen(8000);
