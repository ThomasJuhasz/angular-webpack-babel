var port = 5000;

var express = require('express');

var app = express()

var productData = require('./static-data.js');

// setup express

var server = express();

// serve the frontend on the root
server.use('/', express.static(__dirname + '/../../frontend/dist'));

// endpoints

server.get('/api/product', function (req, res) {
    res.send(productData[req.query.id]);
});

server.get('/api/products', function (req, res) {
    res.send(productData);
});

// start server
server.listen(port);
console.log('Server started! At http://localhost:' + port);