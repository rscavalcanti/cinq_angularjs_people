'use strict';

/**
 * @ngdoc function
 * @name cinqAngularjsPeopleApp.controller:PeopleCtrl
 * @description
 * # PeopleCtrl
 * Controller of the cinqAngularjsPeopleApp
 */
var listPeoples;
angular.module('cinqAngularjsPeopleApp')
  .controller('PeopleCtrl', function ($scope, $http) {
      this.listPeoples = [];
      $http.get('http://localhost:8090/rest/people').success(function (response) {
          $scope.listPeoples = response;
          listPeoples = $scope.listPeoples;
      })
      .error(function (response) {
          console.error('People Rest API Error', response);
      });
  });
