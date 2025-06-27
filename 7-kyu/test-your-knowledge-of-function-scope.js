"use strict";

/**
 * solution 1 -- closure
 * time: O(1)
 * space: O(1)
 *
 * @param {number} a
 * @returns {function}
 */
function add(a) {
    /**
     * @param {number} b
     * @returns {number} sum
     */
    return function sum(b) {
        return a + b;
    };
}

console.log(add(3)(4)); // 7
console.log(add(12)(20)); // 32
