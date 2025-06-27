"use strict";

/**
 * solution 1 -- counters and formula
 * time: O(n)
 * space: O(1)
 *
 * @param {string} s
 * @returns {number}
 */
function solve(s) {
    if (s.length % 2 !== 0) return -1;

    let result = 0;
    let k = 0;

    for (let paren of s) {
        if (paren === "(") {
            k++;
        } else if (paren === ")" && k > 0) {
            k--;
        } else {
            k++;
            result++;
        }
    }

    return result + k / 2;
}
