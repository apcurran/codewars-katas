"use strict";

/**
 * solution 1 -- gauss's math formula
 * time: O(1)
 * space: O(1)
 * 
 * @param {number} n 
 * @returns {number|boolean}
 */
function f(n) {
    if (!Number.isInteger(n) || n <= 0) return false;

    return (n * (n + 1)) / 2;
}

console.log( f(100) ); // 5050
console.log( f(300) ); // 45150
console.log( f("n") ); // false
console.log( f(0) ); // false
console.log( f(6.499800000000001) ); // false
