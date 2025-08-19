"use strict";

/**
 * solution 1 -- iterative
 * time: O(n)
 * space: O(1)
 *
 * @param {Set} s1
 * @param {Set} s2
 * @returns {boolean}
 */
function isSubsetOf(s1, s2) {
    // does 2nd set contain all elems of 1st set?
    // iterate 1st set
    for (let elem of s1) {
        if (!s2.has(elem)) {
            return false;
        }
    }
    // check if all elems of 1st set are within 2nd set
    // return true if all iterations of loop pass
    return true;
}

/**
 *
 * @param {Set} s1
 * @param {Set} s2
 * @returns {boolean}
 */
function isSupersetOf(s1, s2) {
    // does 1st set contain all elems of 2nd set?
    // iterate 2nd set
    for (let elem of s2) {
        if (!s1.has(elem)) {
            return false;
        }
    }

    return true;
}

const A = new Set([1, 2]);
const B = new Set([1, 2, 3]);

console.log(isSubsetOf(A, B)); // -> true
console.log(isSubsetOf(B, A)); // -> false

console.log(isSupersetOf(A, B)); // -> false
console.log(isSupersetOf(B, A)); // -> true
