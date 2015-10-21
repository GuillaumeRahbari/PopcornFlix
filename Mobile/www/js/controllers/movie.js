'use strict';

/**
 * @ngdoc function
 * @name popcornFlixApp.controller:MovieCtrl
 * @description
 * # MovieCtrl
 * Controller of the popcornFlixApp
 */
angular.module('starter')
  .controller('MovieCtrl', ['$scope'/*, '$routeParams'*/, 'movieService', function ($scope/*, $routeParams*/, movieService, $ionicSlideBoxDelegate) {

    /*var title = $routeParams.title;*/

    movieService.getMovies(/*title*/).then(
      function (data){
        $scope.movies = data.movies;
      },
      function (msgError) {
        console.log(msgError);
      }
    );

  }]);
