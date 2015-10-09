'use strict';

/**
 * @ngdoc directive
 * @name popcornFlixApp.directive:movie
 * @description
 * # movie
 */
angular.module('popcornFlixApp')
  .directive('movie', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the movie directive');
      }
    };
  });
