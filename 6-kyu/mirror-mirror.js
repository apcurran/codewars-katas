"use strict";

/**
 * solution 1
 *
 * @param {object} obj
 * @returns {object}
 */
function evilTwin(obj) {
    // must link to original obj,
    // cannot create and return a new obj
    return Object.create(obj, {
        hasGoatee: {
            value: true,
        },
    });
}

const orig = { x: 5 };
const twin = evilTwin(orig);
console.log(twin.x); // -> 5
console.log(twin.hasGoatee);
