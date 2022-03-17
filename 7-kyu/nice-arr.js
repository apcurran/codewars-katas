"use strict";

/**
 * solution 1
 * time: O(n^2)
 * space: O(1)
 * 
 * @param {number[]} arr 
 * @returns {boolean}
 */
function isNice(arr) {
    // edge case
    if (arr.length === 0) return false;

    for (let num of arr) {
        const biggerNum = num + 1;
        const smallerNum = num - 1;

        if (arr.includes(biggerNum) || arr.includes(smallerNum)) {
            continue;
        }

        return false;
    }

    return true;
}

console.log( isNice([2, 10, 9, 3]) ); // true
console.log( isNice([3, 4, 5, 7]) ); // false
