
var ctrlEstacoes = require('./controllers/estacoes.js');


module.exports = function (app) {

	app.get('/', function(req, res) {
		res.json({'Mosaico': 'UPF'});
	});
	
	app.get('/stations', ctrlEstacoes.get);
	app.get('/stations/:id', ctrlEstacoes.get);

	app.post('/stations', ctrlEstacoes.post);

	app.put('/stations/:id', ctrlEstacoes.put);
	app.delete('/stations/:id', ctrlEstacoes.delete);
	
};