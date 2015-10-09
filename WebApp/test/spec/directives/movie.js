'use strict';

describe('Directive: movie', function () {

  // load the directive's module
  beforeEach(module('popcornFlixApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<movie></movie>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the movie directive');
  }));
});
