"use strict";

/**
 * solution 1
 * time: O(n^2)
 * space: O(n)
 * 
 * @param {number[]} arr integer array
 * @returns {number} index
 */
function findEvenIndex(arr) {
    // iterate arr
    for (let i = 0; i < arr.length; i++) {
        // create a copy of arr to left of index & then sum
        const leftSideSum = arr
                                .slice(0, i)
                                .reduce((sum, currNum) => sum + currNum, 0);
        // create a copy of arr to right of index & then sum
        const rightSideSum = arr
                                .slice(i + 1)
                                .reduce((sum, currNum) => sum + currNum, 0);
        // if sums of left and right arr sides are equal return index
        if (leftSideSum === rightSideSum) return i;
    }

    // no indices work
    return -1;
}

console.log( findEvenIndex([1,2,3,4,3,2,1]) ); // 3
console.log( findEvenIndex([1,100,50,-51,1,1]) ); // 1
console.log( findEvenIndex([1,2,3,4,5,6]) ); // -1
