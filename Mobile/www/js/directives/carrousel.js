/**
 * Created by garrigos on 20/10/2015.
 */

'use strict';

/**
 * @ngdoc directive
 * @name popcornFlixApp.directive:movie
 * @description
 * # movie
 */
angular.module('starter')
  .directive('carrousel', [function () {
    return {
      template:

      '<a  id="fer" ng-href="#/movie/{{movie.title}}">' +
      '<img  id="imageCarrousel" lazyload ll-src="http://localhost:3000/images/{{movie.image}}"/>' +
      '<h2>{{movie.title}}</h2>' +
      '</a>',
      restrict: 'E',
      replace: true,
      scope : {
        movie: '=movie'
      },
      require: 'lazyload'
    };
  }]);
