"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 * 
 * @param {array} estimates 
 * @returns {[number, number, number]}
 */
function globalEstimate(estimates) {
    let min = 0;
    let max = 0;

    for (let [featureLow, featureHigh] of estimates) {
        min += featureLow;
        max += featureHigh;
    }

    const avg = (min + max) / 2;

    return [min, avg, max];
}

console.log(globalEstimate([[1, 2], [3, 4]])); // [4, 5, 6]
