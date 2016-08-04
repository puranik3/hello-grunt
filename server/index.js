var http = require('http');
var foo = require('./foo');

console.pretty = console.pretty || function(obj) {
    console.log(JSON.stringify(obj, null, 4));
}

var server = http.createServer(function(req, res) {
    console.dir(req);
    console.dir(res);
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.end(foo());
});

var port = 3000;
server.listen(port, function(err) {
    if (err) {
        throw err;
    }
    console.log('Server started successfully. Accepting connections on port ' + port);
});
