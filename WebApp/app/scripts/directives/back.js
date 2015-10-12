'use strict';

/**
 * @ngdoc directive
 * @name popcornFlixApp.directive:back
 * @description
 * # back
 */
angular.module('popcornFlixApp')
  .directive('back', ['$window', function ($window) {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        element.on('click', function() {
          $window.history.back();
        });
      }
    };
  }]);
