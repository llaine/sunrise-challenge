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
        if(isBookmarked(event.id)){
            bookmars.push(event);
        }
    }

    /**
     * Vérifie si un évent est déjà présent dans la liste des
     * favoris.
     * @param id
     * @returns {boolean}
     */
    function isBookmarked(id) {
        return bookmars.some(function (event) {
            return event.id === id;
        })
    }

    /**
     * Renvoie tout les events dans un callback.
     * @param cb
     */
    function getAll(cb) {
        cb(bookmars);
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