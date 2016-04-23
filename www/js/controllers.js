var app = angular.module('starter.controllers', ['ionic'])

app.controller('MainController', function($scope, $state, $ionicModal, $ionicHistory, $rootScope, $ionicActionSheet) {

	/**
	 * Metodo Global para fechar um modal do app
	 * @author Victor Rossi
	 */
	$scope.closeModal = function() {
		$scope.modal.hide();
	}

	/**
	 * Direciona o usuario para adicionar um meta
	 * @author Victor Rossi
	 */
	$scope.gotoMeta = function() {
		$state.go('meta');
	}

	/**
	 * Direciona o usuario para adicionar um meta
	 * @author Victor Rossi
	 */
	$scope.gotoLido = function() {
		$state.go('lido');
	}

	/**
	 * Direciona o usuario para a lista de desejos
	 * @author Victor Rossi
	 */
	$scope.gotoDesejo = function() {
		$state.go('desejo');
	}

	/**
	 * Criar a conta
	 * @author Victor Rossi
	 */
	$scope.criarConta = function() {

		$ionicHistory.nextViewOptions({
            historyRoot: true,
            disableBack: true
        });

		$rootScope.logado = true;
		$state.go('logado');
	}

  /**
   * Adiciona acoes do menu de configuracoes
   * @author Victor Rossi
   */
  $scope.more = function() {
      // Show the action sheet
     var hideSheet = $ionicActionSheet.show({
       buttons: [
         { text: 'Adicionar a lista de desejos' },
         { text: 'Definir como meta' }
       ],
       cancelText: 'Cancelar',
       cancel: function() {
            // add cancel code..
          },
       buttonClicked: function(index) {
         return true;
       }
     });
  }

	/**
	 * Desloga o usuario
	 * @author Victor Rossi
	 */
	$scope.logout = function() {

		$ionicHistory.nextViewOptions({
            historyRoot: true,
            disableBack: true
        });

		$rootScope.logado = false;
		$state.go('index');
	}
})

.controller('BookController', function($scope, $ionicModal) {

	/**
	 * Metodo de insercao de um livro
	 * @author Victor Rossi
	 */
	$scope.doInsert = function() {
		//Do something
	}
})

.controller('MetaController', function($scope, $ionicModal) {

	/**
	 * Metodo de insercao de um livro
	 * @author Victor Rossi
	 */
	$scope.doInsert = function() {
		//Do something
	}
})

.controller('WishController', function($scope, $ionicModal) {

	/**
	 * Metodo de insercao de um livro
	 * @author Victor Rossi
	 */
	$scope.doInsert = function() {
		//Do something
	}
});
