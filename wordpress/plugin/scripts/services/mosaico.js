
angular.module("mosaico").service('mosaicoService',  function($http) {
	
	var estacoes = [
		{nome: "Embrapa Passo Fundo", cidade: "Passo Fundo"},
		{nome: "UPF", cidade: "Passo Fundo"},
		{nome: "Lagoa", email: "Lagoa Vermelha"},
	];

	this.getEstacoes = function() {
		return estacoes;
	}

	this.addEstacao = function(estacao) {
		estacoes.push(estacao);
	}

	this.get = function() {
		return $http.get('http://127.0.0.1:5000/stations');
	};

	this.post = function(estacao) {
		return $http.post('http://127.0.0.1:5000/stations', estacao);
	};

	this.put = function(estacao) {
		return $http.put('http://127.0.0.1:5000/stations/' + estacao._id , estacao);
	};

	this.delete = function(idEstacao) {
		return $http.delete('http://127.0.0.1:5000/stations/' + idEstacao);
	};

});