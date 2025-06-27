"use strict";

/**
 * solution 1 -- math formula
 * time: O(1)
 * space: O(1)
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @returns {number[]}
 */
function quadraticFormula(a, b, c) {
    const x1 = (-b + Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a);
    const x2 = (-b - Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a);

    return [x1, x2];
}

console.log(quadraticFormula(2, 16, 1)); // [-0.06299606299409444, -7.937003937005906]
