'use strict';

/**
 * @ngdoc function
 * @name popcornFlixApp.controller:MovieCtrl
 * @description
 * # MovieCtrl
 * Controller of the popcornFlixApp
 */
angular.module('popcornFlixApp')
  .controller('MovieCtrl', ['$scope', '$routeParams', 'movieService', '$timeout', function ($scope, $routeParams, movieService, $timeout) {

    var title = $routeParams.title;

    movieService.getMovie(title).then(
      function (data){
          $scope.movieDetails = data;
      },
      function (msgError) {
        console.log(msgError);
      }
    );

  }]);
