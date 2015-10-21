'use strict';

/**
 * Ce service permet d'interroger le serveur sur tout ce qui concerne les films.
 * On peut notamment récupérer la liste des films.
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
angular.module('starter')
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
       * Cette fonction permet de récupérer le détails d'un film.
       * Cette fonction retourne une promesse.
       *
       * @example Voici comment utiliser cette fonction :
       *  movieService.getMovie(theMovie).then(
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
       * La fonction callback de success renvoie le film voulu:
       *  {
       *    "title" : "Terminator Genisys",
       *    "image" : "terminator_genisys.jpg",
       *    "description" : "blablablabla",
       *    "backgroundImage" : "terminator_genisys_background.jpg"
       *  }
       *
       * @returns {Function|promise} Retourne une promesse de réponse avec :
       * <ul>
       *     <li>soit l'objet qu'on attend</li>
       *     <li>soit un message d'erreurs</li>
       * </ul>
       */
      getMovie: function (movie) {
        var deferred = $q.defer();
        $http({
          method : 'GET',
          url : constants.backendUrl + 'movie/' + movie,
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
