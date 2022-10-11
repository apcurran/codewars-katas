"use strict";

/**
 * solution 1 -- regex
 * time: O(n)
 * space: O(n)
 * 
 * @param {string} s 
 * @returns {string}
 */
function replace(s) {
    return s.replace(/[aeiou]/gi, "!");
}

console.log( replace("!Hi! Hi!") ); // "!H!! H!!"
