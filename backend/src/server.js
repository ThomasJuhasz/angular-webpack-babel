var port = 5000;

var express = require('express');

var cors = require('cors')
var app = express()

var productData = require('./static-data.js');

// setup express

var server = express();

var corsOptions = {
    origin: 'localhost:8080',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

server.use(cors(corsOptions))
server.use('/', express.static(__dirname + '/../../frontend/dist'));
server.use(cors());
server.options('*', cors());

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