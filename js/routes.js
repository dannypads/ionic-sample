angular.module('starter.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
  .state('index', {
    url: '/home',
    templateUrl: 'templates/list.html',
    controller: 'indexCtrl'
  })

  .state('new', {
    url: '/new',
    templateUrl: 'templates/new.html',
    controller: 'newCtrl'
  })  

  .state('edit', {
    url: '/edit/:id',
    templateUrl: 'templates/edit.html',
    controller: 'editCtrl'
  })  


 

  

});