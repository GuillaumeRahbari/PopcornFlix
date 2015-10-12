'use strict';

/**
 * @ngdoc function
 * @name popcornFlixApp.controller:MovieCtrl
 * @description
 * # MovieCtrl
 * Controller of the popcornFlixApp
 */
angular.module('popcornFlixApp')
  .controller('MovieCtrl', ['$routeParams', function ($routeParams) {

    var title = $routeParams.title;

  }]);
