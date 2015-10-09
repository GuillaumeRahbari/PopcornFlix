'use strict';

/**
 * @ngdoc overview
 * @name popcornFlixApp
 * @description
 * # popcornFlixApp
 *
 * Main module of the application.
 */
angular
  .module('popcornFlixApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/movies.html',
        controller: 'MoviesCtrl',
        controllerAs: 'movies'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
