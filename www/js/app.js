// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','starter.controllers'])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider.state('index', {
    cache: false,
    url: '/',
    templateUrl: 'templates/home.html',
    controller: 'MainController'
  });

  $stateProvider.state('lido', {
    cache: false,
    url: '/',
    templateUrl: 'templates/lido.html',
    controller: 'BookController'
  });

  //Paginas para as metas
  //Add / List
  $stateProvider.state('meta', {
    cache: false,
    url: '/meta',
    templateUrl: 'templates/meta.html',
    controller: 'BookController'
  });

  //Paginas para a lista de desejos
  //Add / List
  $stateProvider.state('desejo', {
    cache: false,
    url: '/desejo',
    templateUrl: 'templates/desejo.html',
    controller: 'WishController'
  });

  $stateProvider.state('logado', {
    cache: false,
    url: '/logado',
    templateUrl: 'templates/logado.html',
    controller: 'WishController'
  });

  $urlRouterProvider.otherwise('/');

})

.run(function($ionicPlatform) {

  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
