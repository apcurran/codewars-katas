"use strict";

/**
 * solution 1
 * time: O((n * log n) * max(a, b))
 * space: O(n)
 * 
 * @param {number[][]} nums 
 * @returns {number[]}
 */
function cantBeatSoJoin(nums) {
    // sort array groups by largest sums
    nums.sort(function sortArraysByInnerSums(arrA, arrB) {
        const arrASum = arrA.reduce((sum, currentNum) => sum + currentNum, 0);
        const arrBSum = arrB.reduce((sum, currentNum) => sum + currentNum, 0);

        return arrBSum - arrASum;
    });
    
    // flatten to 1-d return array
    return nums.flat(Infinity);
}

console.log(cantBeatSoJoin([[1, 2], [3, 4], [5, 6], [7, 8], [9]])); // [7, 8, 5, 6, 9, 3, 4, 1, 2]
