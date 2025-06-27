"use strict";

/**
 * solution 1
 * time: O(log a + log b)
 * space: O(log a + log b)
 *
 * @param {number} a
 * @param {number} b
 * @returns {[number, number]}
 */
function solve(a, b) {
    if (a === 0 || b === 0) {
        return [a, b];
    }

    // recursive case
    if (a >= 2 * b) {
        const updatedA = a - 2 * b;

        return solve(updatedA, b);
    } else if (b >= 2 * a) {
        const updatedB = b - 2 * a;

        return solve(a, updatedB);
    }

    return [a, b];
}

console.log(solve(6, 19)); // [6, 7]
