"use strict";

// /**
//  * solution 1 -- regex (match method for getting all nums, alpha chars, and math operators)
//  * time: O(n)
//  * space: O(n)
//  *
//  * @param {string} eq
//  * @returns {string}
//  */
// function solve(eq) {
//     return eq
//         .match(/\d+|[a-zA-Z]|[+\-*/]/g)
//         .reverse()
//         .join("");
// }

/**
 * solution 2 -- regex (split method on all math operators)
 * time: O(n)
 * space: O(n)
 *
 * @param {string} eq
 * @returns {string}
 */
function solve(eq) {
    return eq
        .split(/([+\-*/])/)
        .reverse()
        .join("");
}

console.log(solve("100*b/y")); // "y/b*100"
