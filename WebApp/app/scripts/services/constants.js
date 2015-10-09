'use strict';

/**
 *
 * Ce service contient la liste des constantes de l'application.
 * Pour l'utiliser il suffit d'inclure le service <i>constants</i>.
 *
 * @example
 * angular.module('monModule')
 *  .controller('MonCtrl', ['constants', function (constants) {
 *    var serverAdress = constants.backendUrl;
 *  }]);
 *
 * @ngdoc service
 * @name popcornFlixApp.constants
 * @description
 * # constants
 * Constant in the popcornFlixApp.
 */
angular.module('popcornFlixApp')
  .constant('constants', {
    backendUrl : 'http://localhost:3000/' // L'adresse du serveur.
  });
