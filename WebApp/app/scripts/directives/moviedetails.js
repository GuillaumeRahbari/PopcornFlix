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
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the movieDetails directive');
      }
    };
  });
