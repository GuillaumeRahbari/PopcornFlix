'use strict';

/**
 * @ngdoc function
 * @name popcornFlixApp.controller:MovieCtrl
 * @description
 * # MovieCtrl
 * Controller of the popcornFlixApp
 */
angular.module('popcornFlixApp')
  .controller('MovieCtrl', ['$scope', '$routeParams', 'movieService', function ($scope, $routeParams, movieService) {

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
