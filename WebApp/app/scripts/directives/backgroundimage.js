'use strict';

/**
 * @ngdoc directive
 * @name popcornFlixApp.directive:backgroundImage
 * @description
 * # backgroundImage
 */
angular.module('popcornFlixApp')
  .directive('backgroundImage',['$timeout', function ($timeout) {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        $timeout(function() {
          angular.element(element.css("backgroundImage", "url(http://localhost:3000/images/" + attrs.test + ")"));
        });
      }
    };
  }]);
