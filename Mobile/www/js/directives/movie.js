'use strict';

/**
 * @ngdoc directive
 * @name popcornFlixApp.directive:movie
 * @description
 * # movie
 * 192.168.1.25
 */
angular.module('starter')
  .directive('movie', [function () {
    return {
      template:
      '<div class="list card">'+
      '<div class="item item-image">' +
      '<a  ui-sref="movie">' +
      '<img lazyload ll-src="http://192.168.1.25:3000/images/{{movie.image}}"/>' +
      '<h2>{{movie.title}}</h2>' +
      '</a>' +
      '</div>'+
      '</div>',
      restrict: 'E',
      replace: true,
      scope : {
        movie: '=movie'
      },
      require: 'lazyload'
    };
  }]);

