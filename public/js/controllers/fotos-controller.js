angular.module('alurapic').controller('FotosController', function($scope, recursoFoto){
	
	$scope.fotos = [];
	$scope.filtro = '';
	$scope.mensagem = '';

	recursoFoto.query(function(fotos){
		$scope.fotos = fotos;
	}, function(erro){
		console.log(erro)
	});

	$scope.remover = function(foto){
		console.log('remover foto:');
		console.log(foto);

		recursoFoto.delete({fotoId : foto._id}, function(){
				var indiceFoto = $scope.fotos.indexOf(foto);
				$scope.fotos.splice(indiceFoto,1);
				$scope.mensagem = 'Foto' +  foto.titulo  + " foi removida";
			}, function(erro){
				console.log(erro);
				$scope.mensagem = "Não foi possível remover a imagem";
			});
	};

});