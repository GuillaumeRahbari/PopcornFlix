'use strict';

describe('Service: movieService', function () {

  // load the service's module
  beforeEach(module('popcornFlixApp'));

  // instantiate service
  var movieService;
  beforeEach(inject(function (_movieService_) {
    movieService = _movieService_;
  }));

  it('should do something', function () {
    expect(!!movieService).toBe(true);
  });

});
