"use strict";

/**
 * solution 1 -- regex
 * time: O(n)
 * space: O(n)
 * 
 * @param {string} str 
 * @returns {string}
 */
function errBob(str) {
    return str
            .replace(/([bcdfghjklmnpqrstvwxyz])(\W|$)/g, "$1err$2")
            .replace(/([BCDFGHJKLMNPQRSTVWXYZ])(\W|$)/g, "$1ERR$2");
}

console.log(errBob("Hello, I am Mr Bob"));
// "Hello, I amerr Mrerr Boberr"
