var http = require('http');
var jsonFile = require('jsonFile');
var file = 'jogos.json';
var equipes = 'equipes.json';
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(function(req, res, next) {
res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    next();
});

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

/* Retornar todos os exercícios */
app.get('/', function (req, res) {
  //res.writeHeader(200, {"Content-Type": "text/html"});
  res.sendFile('index.html');
  
});

app.get('/jogos', function (req, res) {
	res.send(jsonFile.readFileSync(file));
});

app.get('/equipes', function (req, res) {
	res.send(jsonFile.readFileSync(equipes));
});

/* Salva um novo JSON de exercícios */
app.post('/jogos', function(request, response){
	var json = request.body;
    jsonFile.writeFile(file, json, function (err) {
		console.error(err);
	});
	response.send('Salvo com sucesso!');
});

app.post('/equipes', function(request, response){
	var json = request.body;
    jsonFile.writeFile(equipes, json, function (err) {
		console.error(err);
	});
	response.send('Salvo com sucesso!');
});

app.listen(3000, function () {
  console.log('Servidor inicializado com sucesso na porta 3000!');
});