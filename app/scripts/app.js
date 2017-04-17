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
    // $httpProvider.defaults.useXDomain = true;
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
        controller: 'informationCtrl'
    })
     
   .state('list', {
        url : '/list', 
        templateUrl: 'views/list.html',
        controller: 'listCtrl'  
    }) 
   .state('newemployee', {
        url : '/newemployee', 
        templateUrl: 'views/newemployee.html',
        controller: 'newemployeeCtrl'  
    }) 
     .state('emp_full_detail', {
        url : '/emp_full_detail/:id', 
        templateUrl: 'views/emp_full_detail.html',
        controller: 'showEmpCtrl'  
    }) 

  }]);
