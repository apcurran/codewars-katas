"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 * 
 * @param {number[]} u 
 * @param {number[]} v 
 * @returns {boolean}
 */
function isOrthogonal(u, v) {
    let dotProduct = 0;

    for (let i = 0; i < u.length; i++) {
        const product = u[i] * v[i];
        dotProduct += product;
    }

    return dotProduct === 0;
}

console.log(isOrthogonal([1, 1, 1], [2, 5, 7])); // false
console.log(isOrthogonal([1, 0, 0, 1], [0, 1, 1, 0])); // true
