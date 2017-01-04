var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EstacaoSchema = new Schema({	
	nome: {
		type: String,
		required: true
	},
	cidade: {
		type: String,
		required: true
	}
});


module.exports = mongoose.model('Estacao', EstacaoSchema);