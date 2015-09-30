'use strict';

/**
 *
 * Directive permettant de déplacer un id d'un élément A vers un élément B.
 * Utilisation :
 * <ul>
 *     <li>Placer la directive <i>my-place-id</i> sur l'élement B.</li>
 *     <li>Ajouter l'attribut <i>class-add="nomClass"</i> à l'élement B.</li>
 * </ul>
 *
 * @example <UneBalise my-place-id class-add="show"></UneBalise>
 * Lorsque l'on clique sur la balise <i>UneBalise</i> cela va ajouter l'id "show" sur l'élément
 * et le supprimer sur l'élément qui le possédait.
 *
 * @ngdoc directive
 * @name popcornFlixApp.directive:myPlaceId
 * @description
 * # myPlaceId
 */
angular.module('popcornFlixApp')
  .directive('myPlaceId', function () {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        element.on('click', function () {
          angular.element('#' + attrs.classAdd).removeAttr('id');
          element.attr('id', attrs.classAdd);
        });
      }
    };
  });
