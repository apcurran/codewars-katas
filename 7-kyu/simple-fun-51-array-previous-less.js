"use strict";

/**
 * solution 1
 * time: O(n^2)
 * space: O(n)
 * 
 * @param {number[]} arr 
 * @returns {number[]}
 */
function arrayPreviousLess(arr) {
    let results = new Array(arr.length).fill(-1);
    // iterate num of arr
    for (let i = 0; i < arr.length; i++) {
        const currentNum = arr[i];

        // iterate backwards to check next left num smaller than currentNum
        for (let j = i - 1; j >= 0; j--) {
            const leftNum = arr[j];

            if (leftNum < currentNum) {
                results[i] = leftNum;
                // do not continue if a smaller num is found
                break;
            }
        }
    }

    return results;
}

console.log(arrayPreviousLess([3, 5, 2, 4, 5]));
// [-1, 3, -1, 2, 4]
