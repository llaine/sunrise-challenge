/**
 * Created by louis on 02/06/15.
 */

'use strict';


app.service('BookMarksService', [function () {
    var bookmars = [];

    /**
     * Ajoute un évent à la liste des favoris en vérifiant que
     * celui-ci n'existe pas déjà.
     * @param event
     */
    function addOne(event) {
        if(!isBookmarked(event.name)){
            bookmars.push(event);
        }
    }

    /**
     * Vérifie si un évent est déjà présent dans la liste des
     * favoris.
     * @param name
     * @returns {boolean}
     */
    function isBookmarked(name) {
        return bookmars.some(function (event) {
            return event.name === name;
        })
    }

    /**
     * Renvoie tout les events dans un callback.
     * @returns {Array}
     */
    function getAll() {
        return bookmars;
    }

    /**
     * Récupère un évenement provenant de la liste des favoris.
     * @param id
     * @returns {Array.<T>}
     */
    function get(id){
        return bookmars.filter(function (bookmark) {
            return bookmark.id === id;
        })
    }

    return {
        add:addOne,
        get:get,
        query:getAll
    }


}]);