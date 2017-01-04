angular.module("mosaico").controller("mosaicoController", function($scope,  mosaicoService) {	

	$scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };

	$scope.adicionarEstacao = function(estacao) {
		mosaicoService.addEstacao(estacao);
		
		delete $scope.estacao;
	};

	var getEstacoes = function() {
		$scope.estacoes = mosaicoService.getEstacoes();
	}
	//getEstacoes();

	$scope.getEstacoesServer = function() {
		mosaicoService.get().then(function(res){			
			$scope.estacoes = res.data;		
		});
	};

	$scope.getEstacoesServer(); // Get data from service (mosaicoService)

	$scope.adicionarEstacaoServer = function(estacao) {
		mosaicoService.post(estacao).then(function(res){
			$scope.getEstacoesServer();
			delete $scope.estacao;
		});
	};

	$scope.editarEstacaoServer = function(estacao) {
		$scope.estacao = estacao;
	};

	$scope.removerEstacaoServer = function(estacao) {
		mosaicoService.delete(estacao._id).then(function(res) {
			$scope.getEstacoesServer();
		});
	};

	$scope.salvarEstacaoServer = function(estacao) {
		mosaicoService.put(estacao).then(function(res) {
			$scope.getEstacoesServer();
			delete $scope.estacao;
		});
	};
});
