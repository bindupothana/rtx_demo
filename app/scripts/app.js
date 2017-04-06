'use strict';

/**
 * @ngdoc overview
 * @name rtxDemoApp
 * @description
 * # rtxDemoApp
 *
 * Main module of the application.
 */
 var rtxDemoApp = angular.module('rtxDemoApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'ui.bootstrap'

  ])
  rtxDemoApp.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider,$urlRouterProvider)
   {
    $urlRouterProvider.otherwise('/login')
    $stateProvider 
    .state('login', {
        url : '/login', 
        templateUrl: 'views/login.html',
        controller: 'loginCtrl'
        
    })
   .state('empinfo', {
        url : '/empinfo', 
        templateUrl: 'views/empinfo.html',
        controller: 'regCtrl'
        
    })
   .state('newemployee', {
        url : '/newemployee', 
        templateUrl: 'views/newemployee.html',
        controller: 'regCtrl'
        
    })
   
  }]);
