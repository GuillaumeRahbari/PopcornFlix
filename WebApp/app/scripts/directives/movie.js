'use strict';

/**
 * @ngdoc directive
 * @name popcornFlixApp.directive:movie
 * @description
 * # movie
 */
angular.module('popcornFlixApp')
  .directive('movie', [function () {
    return {
      template:
      '<div class="col-lg-2 col-md-3 col-sm-6 col-xs-12">' +
        '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">' +
          '<img lazyload ll-src="http://localhost:3000/images/{{movie.image}}"/>' +
        '</div>' +
        '<div>' +
          '{{movie.title}}' +
        '</div>' +
      '</div>',
      restrict: 'E',
      replace: true,
      scope : {
        movie: '=movie'
      },
      require: 'lazyload'
    };
  }]);
