"use strict";

/**
 * solution 1
 * time: O(n^2)
 * space: O(n)
 * 
 * @param {number[]} arr
 * @returns {number[]}
 */
function ranks(arr) {
    const sortedArr = [...arr].sort((a, b) => b - a);

    return arr.map((val) => sortedArr.indexOf(val) + 1);
}

console.log( ranks([9, 3, 6, 10]) ); // [2,4,3,1]
