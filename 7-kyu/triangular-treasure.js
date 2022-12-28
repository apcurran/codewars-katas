"use strict";

/**
 * solution 1 -- iterative
 * time: O(n)
 * space: O(1)
 * 
 * @param {number} n 
 * @returns {number}
 */
function triangular(n) {
    let counter = 0;

    for (let i = n; i >= 0; i--) {
        counter += i;
    }

    return counter;
}

console.log( triangular(2) ); // 3
console.log( triangular(4) ); // 10
console.log( triangular(-10) ); // 0
