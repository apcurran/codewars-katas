"use strict";

// /**
//  * solution 1
//  * n = startingNums length
//  * m = mixedNums length
//  * time: O(n + m)
//  * space: O(m)
//  * 
//  * @param {number[]} startingNums 
//  * @param {number[]} mixedNums 
//  * @returns {number} missing number
//  */
// function findDeletedNumber(startingNums, mixedNums) {
//     if (startingNums.length < 1) return 0;

//     const uniqueMixedNums = new Set(mixedNums);

//     for (let num of startingNums) {
//         if (!uniqueMixedNums.has(num)) return num;
//     }

//     return 0;
// }

/**
 * solution 2
 * n = startingNums length
 * m = mixedNums length
 * time: O(n + m)
 * space: O(1)
 * 
 * @param {number[]} startingNums 
 * @param {number[]} mixedNums 
 * @returns {number} missing number
 */
function findDeletedNumber(startingNums, mixedNums) {
    const startingNumsSum = startingNums.reduce((sum, curr) => sum + curr, 0);
    const mixedNumsSum = mixedNums.reduce((sum, curr) => sum + curr, 0);

    return startingNumsSum - mixedNumsSum;
}

console.log( findDeletedNumber([1,2,3,4,5], [3,4,1,5]) ); // 2
console.log( findDeletedNumber([1,2,3,4,5,6,7,8,9], [1,9,7,4,6,2,3,8]) ); // 5
console.log( findDeletedNumber([1,2,3,4,5,6,7,8,9], [5,7,6,9,4,8,1,2,3]) ); // 0
