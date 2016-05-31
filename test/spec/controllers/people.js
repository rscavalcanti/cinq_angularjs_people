'use strict';

describe('Controller: PeopleCtrl', function () {

  // load the controller's module
  beforeEach(module('cinqAngularjsPeopleApp'));

  var PeopleCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PeopleCtrl = $controller('PeopleCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should have an empty list of peoples', function () {
      expect(PeopleCtrl.listPeoples.length).toBe(0);
  });
});
