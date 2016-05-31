'use strict';

/**
 * @ngdoc overview
 * @name cinqAngularjsPeopleApp
 * @description
 * # cinqAngularjsPeopleApp
 *
 * Main module of the application.
 */
angular
  .module('cinqAngularjsPeopleApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/people', {
        templateUrl: 'views/people.html',
        controller: 'PeopleCtrl',
        controllerAs: 'people'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
