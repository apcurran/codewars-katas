"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 *
 * @param {number} firstTerm
 * @param {number} ratio
 * @param {number} nTerms
 * @returns {number}
 */
function GeometricSequenceSum(firstTerm, ratio, nTerms) {
    let sum = firstTerm;
    let term = firstTerm;

    for (let i = 0; i < nTerms - 1; i++) {
        term *= ratio;
        sum += term;
    }

    return sum;
}

console.log(GeometricSequenceSum(2, 3, 5)); // 242
