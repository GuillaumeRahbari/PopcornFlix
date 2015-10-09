'use strict';

/**
 * @ngdoc function
 * @name popcornFlixApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the popcornFlixApp
 */
angular.module('popcornFlixApp')
  .controller('MainCtrl', ['$scope','movieService', function ($scope,movieService) {
    movieService.getMovies().then(
      function (data){
        $scope.movies = data.movies;
      },
      function (msgError) {
        console.log(msgError);
      }
    )
  }]);
