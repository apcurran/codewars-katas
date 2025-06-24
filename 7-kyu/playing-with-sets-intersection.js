"use strict";

/**
 * solution 1 -- manual method (without built-in Set.prototype.intersection())
 * time: O(s1)
 * space: O(1) -- not including result space
 * 
 * @param {Set} s1 
 * @param {Set} s2 
 * @returns {Set}
 */
function inter(s1, s2) {
    let result = new Set();

    // iterate s1
    for (let s1Value of s1) {
        // check if s2 has current value from s1 (yes -> add to result)
        if (s2.has(s1Value)) result.add(s1Value);
    }

    return result;
}

console.log(inter(new Set([1, 2]), new Set([2, 3]))); // { 2 }
