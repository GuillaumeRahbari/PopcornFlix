'use strict';

/**
 * @ngdoc directive
 * @name popcornFlixApp.directive:movieDetails
 * @description
 * # movieDetails
 */
angular.module('starter')
  .directive('moviedetails', [function () {
    return {
      template:
      '<div class="list card">'+
      '<div class="item item-avatar">' +
      '<img lazyload ll-src="http://192.168.1.25:3000/images/{{movie.image}}"/>' +
      '<h2>{{movie.title}}</h2>' +
      '</div>' +
      '<div class="item item-body">' +
      '<p>{{movie.description}}</p>' +
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
