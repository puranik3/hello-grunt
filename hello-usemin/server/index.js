var http = require('http');

console.pretty = console.pretty || function(obj) {
    console.log(JSON.stringify(obj, null, 4));
};

var server = http.createServer(function(req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.end( 'hello, usemin' );
});

var port = 4000;
server.listen(port, function(err) {
    if (err) {
        throw err;
    }
    console.log('Server started successfully. Accepting connections on port ' + port);
});
