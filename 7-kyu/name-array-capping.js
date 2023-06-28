"use strict";

/**
 * solution 1
 * n = names length
 * m = name letters length
 * time: O(n * m)
 * space: O(n)
 * 
 * @param {string[]} names 
 * @returns {string[]}
 */
function capMe(names) {
    return names.map((name) => name[0].toUpperCase() + name.slice(1).toLowerCase());
}

console.log( capMe(["jo", "nelson", "jurie"]) ); // ['Jo', 'Nelson', 'Jurie']
console.log( capMe(["KARLY", "DANIEL", "KELSEY"]) ); // ['Karly', 'Daniel', 'Kelsey']
