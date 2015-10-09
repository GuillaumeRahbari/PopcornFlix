'use strict';

/**
 * @ngdoc function
 * @name popcornFlixApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the popcornFlixApp
 */
angular.module('popcornFlixApp')
  .controller('MainCtrl', ['movieService', function (movieService) {
    movieService.getMovies().then(
      function (data){
        console.log(data);
      },
      function (data) {
        console.log(data);
      }
    )
  }]);
