"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 * 
 * @param {number[]} arr 
 * @param {string} toReturn 
 * @returns {number}
 */
function min(arr, toReturn) {
    const smallestNum = Math.min(...arr);

    if (toReturn === "value") return smallestNum;

    // get smallest index
    return arr.indexOf(smallestNum);
}

console.log( min([1, 2, 3, 4, 5], "value") ); // 1
console.log( min([1, 2, 3, 4, 5], "index") ); // 0
