/**
 * Created by garrigos on 20/10/2015.
 */

'use strict';

/**
 * @ngdoc directive
 * @name popcornFlixApp.directive:movie
 * @description
 * # movie
 * 192.168.1.25
 */
angular.module('starter')
  .directive('movieslist', [function () {
    return {
      template:
      '<div class="list">'+
      '<a class="item item-thumbnail-left" ui-sref="movie">' +
      '<img lazyload ll-src="http://localhost:3000/images/{{movie.image}}"/>' +
      '<h2 class="padding">{{movie.title}}</h2>' +
      '<h3>{{movie.description}}</h3>' +
      '</a>' +
      '</div>',
      restrict: 'E',
      replace: true,
      scope : {
        movie: '=movie'
      },
      require: 'lazyload'
    };
  }]);
