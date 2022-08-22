"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {number[]} nums
 * @returns {number[]}
 */
function bubblesortOnce(nums) {
    let numsCopy = [...nums];

    for (let i = 0; i < numsCopy.length; i++) {
        const currNum = numsCopy[i];
        const nextNum = numsCopy[i + 1];

        if (currNum > nextNum) {
            // swap positions
            numsCopy[i] = nextNum;
            numsCopy[i + 1] = currNum;
        }
    }

    return numsCopy;
}

console.log( bubblesortOnce([9, 7, 5, 3, 1, 2, 4, 6, 8]) ); // [7, 5, 3, 1, 2, 4, 6, 8, 9]
