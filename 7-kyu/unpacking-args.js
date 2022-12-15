"use strict";

/**
 * solution 1
 * time: O(n) - spreading array into args
 * space: O(n)
 * 
 * @param {function} func 
 * @param {array} args 
 * @returns {any}
 */
function spread(func, args) {
    return func(...args);
}
