var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();
var api = express();

var portListener = 5000;

var dbMongo = mongoose.connection;

/*Conexão com o banco de dados*/
mongoose.connect('mongodb://127.0.0.1/MosaicoTest');
dbMongo.on('error', console.error.bind(console, 'connection error:'));
dbMongo.once('open', function () {
  console.log('Conectado com sucesso ao MongoDB!');
});


/* CORS */
var allowCrossDomain = function(req, res, next) {

  //HTTP Headers for CORS authorization
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.set('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With, X-Custom-Header');
  res.set('Access-Control-Request-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With, X-Custom-Header');

  if ('OPTIONS' == req.method) {
    res.send(200, '');
  } else {
    next();
  }
};

app.use(allowCrossDomain);


app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
  
app.set('json spaces', 4);


require('./routes.js')(app);


/* Inicia o servidor */
app.listen(portListener, '0.0.0.0');
console.log('Running on port: ' + portListener);