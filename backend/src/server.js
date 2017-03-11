var port = 8080;

var express = require('express');
var cors = require('cors');
var productData = require('./static-data.js');

// setup express

var server = express();

server.use('/', express.static(__dirname + '/../'));
server.use(cors());
server.options('*', cors());   

// endpoints

server.get('/api/product',function(req, res){
    res.send(productData[req.query.id]);
});

server.get('/api/products', function(req, res) {
    res.send(productData);
});

// start server

server.listen(port);
console.log('Server started! At http://localhost:' + port);