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
  rtxDemoApp.config(['$stateProvider', '$urlRouterProvider', '$httpProvider',function ($stateProvider,$urlRouterProvider,$httpProvider)
   {
    $httpProvider.defaults.useXDomain = true;
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
   .state('list', {
        url : '/list', 
        templateUrl: 'views/list.html',
        controller: 'regCtrl'  
    }) 
   .state('go_to_new_emp', {
        url : '/go_to_new_emp', 
        templateUrl: 'views/go_to_new_emp.html',
        controller: 'listCtrl'  
    }) 

  }]);
