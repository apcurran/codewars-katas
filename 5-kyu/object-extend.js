"use strict";

/**
 * solution 1
 * n = objects length
 * m = properties in largest object
 * x = total unique properties within all objects
 * time: O(n * m)
 * space: O(x)
 * 
 * @param {...object} objects
 * @returns {object}
 */
function extend(...objects) {
    return objects
        .filter(isObject)
        .reduce((fullObject, currentObject) => {
            return { ...currentObject, ...fullObject };
        }, {});
}

console.log(extend({a: 1, b: 2}, {c: 3}));
// {a: 1, b: 2, c: 3}
