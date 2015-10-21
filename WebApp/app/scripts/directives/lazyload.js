'use strict';

/**
 * @ngdoc directive
 * @name popcornFlixApp.directive:lazyload
 * @description
 * # lazyload
 */
angular.module('popcornFlixApp')
  .directive('lazyload', ['$timeout',function ($timeout) {
    return {
      restrict:'A',
      scope: {},
      link: function(scope, elem, attrs) {
        $timeout(function(){ elem.attr('src', attrs.llSrc) }, 200);
      }
    };
  }]);
