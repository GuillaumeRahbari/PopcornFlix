'use strict';

/**
 * @ngdoc function
 * @name popcornFlixApp.controller:MoviesCtrl
 * @description
 * # MoviesCtrl
 * Controller of the popcornFlixApp
 */
angular.module('starter')
  .controller('MoviesCtrl', ['$scope','movieService', function ($scope,movieService) {
    movieService.getMovies().then(
      function (data){
        $scope.movies = data.movies;
      },
      function (msgError) {
        console.log(msgError);
      }
    )
  }]);
