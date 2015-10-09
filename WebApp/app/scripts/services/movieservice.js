'use strict';

/**
 * Ce service permet d'interroger le serveur sur tout ce qui concerne les films.
 * On peut notamment récupérer la liste des films, et récupérer l'image d'un film.
 * Pour cela il faut inclure le service <i>movieService</i>
 *
 * @example
 * Voilà comment inclure le service :
 * angular.module('monModule')
 *  .controller('MonCtrl', ['movieService', function (movieService) {
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
       * Cette fonction permet de récupérer la liste des films.
       * Cette fonction retourne une promesse.
       *
       * @example Voici comment utiliser cette fonction :
       *  movieService.getMovies().then(
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
       * La fonction callback de success renvoie un tableau contenant les films:
       *  {
       *    "movies" : [
       *      {
       *        "title" : "Terminator Genisys",
       *        "image" : "terminator_genisys.jpg"
       *      }
       *    ]
       *  }
       *
       * @returns {Function|promise} Retourne une promesse de réponse avec :
       * <ul>
       *     <li>soit un tableau de ce qu'on attend</li>
       *     <li>soit un message d'erreurs</li>
       * </ul>
       */
      getMovies: function () {
        var deferred = $q.defer();
        $http({
          method : 'GET',
          url : constants.backendUrl + 'movies/',
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
