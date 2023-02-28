"use strict";

// /**
//  * solution 1 -- sort arr
//  * time: O(n * log n)
//  * space: O(n)
//  * 
//  * @param {number[]} arr 
//  * @returns {number}
//  */
// function findDup(arr) {
//     const sortedNums = arr.sort((a, b) => a - b);

//     for (let i = 0; i < sortedNums.length - 1; i++) {
//         const currentNum = sortedNums[i];
//         const nextNum = sortedNums[i + 1];

//         if (currentNum === nextNum) return currentNum;
//     }

//     return -1;
// }

/**
 * solution 2 -- Set obj
 * time: O(n)
 * space: O(n)
 * 
 * @param {number[]} arr 
 * @returns {number}
 */
function findDup(arr) {
    let seenValues = new Set();

    for (let num of arr) {
        if (seenValues.has(num)) return num;

        seenValues.add(num);
    }

    return -1;
}

// /**
//  * solution 3 -- Set obj
//  * time: O(n)
//  * space: O(n)
//  * 
//  * @param {number[]} arr 
//  * @returns {number}
//  */
// function findDup(arr) {
//     let arrSum = 0;
    
//     for (let num of arr) {
//         arrSum += num;
//     }
    
//     let uniqueValues = new Set(arr);
//     let uniqueValuesSum = 0;

//     for (let num of uniqueValues) {
//         uniqueValuesSum += num;
//     }   
    
//     return arrSum - uniqueValuesSum;
// }

console.log( findDup([1,3,2,5,4,5,7,6]) ); // 5
