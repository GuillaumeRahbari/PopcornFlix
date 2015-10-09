'use strict';

/**
 * Ce service permet d'interroger le serveur sur tout ce qui concerne les magasins.
 * On peut notamment récupérer la liste des magasins, et définir la liste des magasins choisis.
 * Pour cela il faut inclure le service <i>shops</i>
 *
 * @example
 * Voilà comment inclure le service :
 * angular.module('monModule')
 *  .controller('MonCtrl', ['shops', function (shops) {
 * }]);
 *
 *
 * @ngdoc service
 * @name popcornFlixApp.movieService
 * @description
 * # movieService
 * Factory in the popcornFlixApp.
 */
angular.module('popcornFlixApp')
  .factory('movieService',['$q', '$http', 'constants', function ($q, $http, constants) {

    return {

      /**
       * Cette fonction permet de récupérer la liste des magasins présent en base de données.
       * Cette fonction retourne une promesse.
       *
       * @example Voici comment utiliser cette fonction :
       *  shops.getShops().then(
       *    // Fonction callback lors du success
       *    function (data) {
       *      console.log(data);
       *    },
       *    // Fonction callback d'erreur.
       *    function (msgErreur) {
       *      console.log(msgErreur);
       *    }
       *  );
       *
       * La fonction callback de success renvoie un tableau contenant les magasins:
       *  [ {
       *      id: 2,
       *      latitude: '48.889042',
       *      longitude: '2.2883',
       *      description: 'Resto 2',
       *      id_user: null
       *    }, {
       *      id: 1,
       *      latitude: '48.8879996',
       *      longitude: '2.2882407',
       *      description: 'Resto 1',
       *      id_user: null
       *    }
       *  ]
       *
       * @returns {Function|promise} Retourne une promesse de réponse avec :
       * <ul>
       *     <li>soit un tableau de ce qu'on attend</li>
       *     <li>soit un message d'erreurs</li>
       * </ul>
       */
      getShops: function () {
        var deferred = $q.defer();
        $http({
          method : 'GET',
          url : constants.backendUrl + 'shops/',
          headers: {'Content-Type': 'application/json'}
        }).then(
          function (data) { // success de node js
            if (data.status === 200 ) { // success de la bdd
              deferred.resolve(data.data);
            }
            else { // erreur de la bdd
              deferred.reject('Erreur BDD : ' + data.status);
            }
          },
          function () { // erreur de node js.
            deferred.reject('Erreur de connexion !');
          }
        );
        return deferred.promise;
      },

      /**
       * Cette fonction permet de définir la liste des magasins choisis et de les enregistrer en base de données.
       * Cette fonction retourne une promesse.
       *
       * @example Voici comment utiliser cette fonction :
       *  var shopsChosenArray = [ 1, 2, 3]
       *  shops.postShopsChosen(shopsChosenArray).then(
       *    // Fonction callback lors du success
       *    function (data) {
       *      console.log(data);
       *    },
       *    // Fonction callback d'erreur.
       *    function (msgErreur) {
       *      console.log(msgErreur);
       *    }
       *  );
       *
       * @param {Object} data - Un tableau contenant la liste des magasins choisis (leur id).
       * @returns {Function|promise} Retourne une promesse de réponse.
       */
      // TODO : vérifier que la liste envoyée est bien une liste ne contenant que des integer pour les ids.
      postShopsChosen : function (data) {
        var deferred = $q.defer();
        $http({
          method: 'POST',
          url: constants.backendUrl + 'users/',
          data: data,
          headers: {'Content-Type': 'application/json'}
        }).then(
          function (data) { // success de node js
            if (data.status === 200 ) { // success de la bdd
              deferred.resolve(data.data);
            }
            else { // erreur de la bdd
              deferred.reject('Erreur BDD : ' + data.status);
            }
          },
          function () { // erreur de node js.
            deferred.reject('Erreur de connexion !');
          }
        );
        return deferred.promise;
      }
    };
  }]);
