var http = require('http');
var jsonFile = require('jsonFile');
var file = 'teste.json';
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

/* Retornar todos os exerc�cios */
app.get('/', function (req, res) {
  res.send(jsonFile.readFileSync(file));
});

/* Salva um novo JSON de exerc�cios */
app.post('/', function(request, response){
	var json = request.body;
    jsonFile.writeFile(file, json, function (err) {
		console.error(err);
	});
	response.send('Salvo com sucesso!');
});

app.listen(3000, function () {
  console.log('Servidor inicializado com sucesso na porta 3000!');
});