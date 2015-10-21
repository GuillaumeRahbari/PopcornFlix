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
      template:
      '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">' +
        '<div class="col-lg-3 col-md-6 col-xs-12 col-sm-12">' +
          '<img lazyload ll-src="http://localhost:3000/images/{{movie.image}}"/>' +
        '</div>'+
        '<div class="texte col-lg-9 col-md-6 col-xs-12 col-sm-12">' +
          '<span>{{movie.description}}</span>' +
        '</div>' +
      '</div>',
      restrict: 'E',
      scope : {
        movie: '=movie'
      },
      replace: true,
      require: 'backgroundImage'
    };
  });
