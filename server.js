var express = require('express');
var http = require('http');

app = express();

app.use('/.well-known', express.static(__dirname + '/.well-known', {dotfiles:'allow'}))

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html')
})

var server = http.createServer(app);
server.listen(80, function() {
  console.log('http listening on port 80')
});
