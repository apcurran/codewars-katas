"use strict";

// /**
//  * solution 1 -- for loop
//  * time: O(n)
//  * space: O(n)
//  *
//  * @param {number[]} nums
//  * @returns {number[]}
//  */
// function incrementer(nums) {
//     let resArr = [];

//     for (let i = 0; i < nums.length; i++) {
//         const currNum = nums[i];
//         const incrementAmt = i + 1;
//         const incrementedNum = (currNum + incrementAmt) % 10;
//         resArr.push(incrementedNum);
//     }

//     return resArr;
// }

/**
 * solution 2 -- array.map() method
 * time: O(n)
 * space: O(n)
 *
 * @param {number[]} nums
 * @returns {number[]}
 */
function incrementer(nums) {
    return nums.map((num, index) => {
        const incrementAmt = index + 1;

        return (num + incrementAmt) % 10;
    });
}

console.log(incrementer([1, 2, 3])); // [2, 4, 6]
console.log(incrementer([4, 6, 9, 1, 3])); // [5, 8, 2, 5, 8]
