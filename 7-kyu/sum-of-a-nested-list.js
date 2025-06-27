"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {array} arr 
 * @returns {number}
 */
function sumNested(arr) {
    return arr
        .flat(Infinity)
        .reduce((sum, currentNum) => sum + currentNum, 0);
}

console.log(sumNested([1, [2, [3, [4]]]])); // 10
