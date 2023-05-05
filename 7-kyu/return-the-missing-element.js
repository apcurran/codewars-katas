"use strict";

// /**
//  * solution 1
//  * time: O(1) -- always 8 elems in arr
//  * space: O(1)
//  * 
//  * @param {number[]} importantNums 
//  * @returns {number} missing element
//  */
// function getMissingElement(importantNums) {
//     const allNums = new Set([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

//     for (let num of allNums) {
//         if (!importantNums.includes(num)) {
//             return num;
//         }
//     }

//     return -1;
// }

/**
 * solution 2
 * time: O(1) -- always 8 elems in arr
 * space: O(1)
 * 
 * @param {number[]} importantNums 
 * @returns {number} missing element
 */
function getMissingElement(importantNums) {
    for (let i = 0; i <= 9; i++) {
        if (!importantNums.includes(i)) {
            return i;
        }
    }

    return -1;
}

console.log( getMissingElement([0, 5, 1, 3, 2, 9, 7, 6, 4]) ); // 8
