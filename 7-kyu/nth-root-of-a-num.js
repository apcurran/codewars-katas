"use strict";

/**
 * solution 1
 * time: O(1)
 * space: O(1)
 * 
 * @param {number} x 
 * @param {number} n 
 * @returns {number}
 */
function root(x, n) {
    return x ** (1 / n);
}

console.log( root(4, 2) ); // 2
console.log( root(9, 2) ); // 3
console.log( root(6.25, 2) ); // 2.5
