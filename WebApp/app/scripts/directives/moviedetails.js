'use strict';

/**
 * @ngdoc directive
 * @name popcornFlixApp.directive:movieDetails
 * @description
 * # movieDetails
 */
angular.module('popcornFlixApp')
  .directive('movieDetails', function () {
    return {
      template: '<div class="col-lg-12" background-image test="{{movie.background}}"></div>',
      restrict: 'E',
      scope : {
        movie: '=movie'
      },
      replace: true,
      require: 'backgroundImage'
    };
  });
