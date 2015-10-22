/**
 * Created by garrigos on 21/10/2015.
 */
'use strict';

/**
 * @ngdoc directive
 * @name popcornFlixApp.directive:movieDetails
 * @description
 * # movieDetails
 */
angular.module('starter')
  .directive('movieslide', [function () {
    return {
      template:
      '<ion-slide>'+
      '<div class="list card">'+
      '<div class="item item-image">' +
      '<a  ui-sref="movie">'+
      '<img lazyload ll-src="http://192.168.1.25:3000/images/{{movie.image}}"/>' +
      '</a>' +
      '</div>'+
      '</div>'+
      '</ion-slide>',
      restrict: 'E',
      replace: true,
      scope : {
        movie: '=movie'
      },
      require: 'lazyload'
    };
  }]);
