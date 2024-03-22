"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {number[]} items 
 * @param {number} a 
 * @param {number} b 
 * @returns {number[]}
 */
function inverseSlice(items, a, b) {
    const beginning = items.slice(0, a);
    const ending = items.slice(b);

    return [...beginning, ...ending];
}

console.log(inverseSlice([12, 14, 63, 72, 55, 24], 2, 4));
// [12, 14, 55, 24]
