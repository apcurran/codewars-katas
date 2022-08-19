"use strict";

/**
 * solution 1 -- regex method
 * time: O(n)
 * space: O(n)
 * 
 * @param {string} s 
 * @returns {string}
 */
function stringClean(s) {
    return s.replace(/[0-9]/g, "");
}

console.log( stringClean("123456789") ); // ""
console.log( stringClean("This looks5 grea8t!") ); // "This looks great!"
