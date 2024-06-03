"use strict";

// /**
//  * solution 1
//  * time: O(n)
//  * space: O(1)
//  * 
//  * @param {number[]} arr 
//  * @returns {number}
//  */
// function diffBig2(arr) {
//     let largest = 0;
//     let secondLargest = 0;

//     for (let num of arr) {
//         if (num >= largest) {
//             // update second largest value
//             secondLargest = largest;
//             // update largest value
//             largest = num;
//         } else if (num > secondLargest) {
//             secondLargest = num;
//         }
//     }

//     return largest - secondLargest;
// }

/**
 * solution 1
 * time: O(n^2)
 * space: O(1)
 * 
 * @param {number[]} arr 
 * @returns {number}
 */
function diffBig2(arr) {
    const sorted = bubbleSort(arr);

    return sorted[sorted.length - 1] - sorted[sorted.length - 2];
}

/**
 * @param {number[]} nums 
 * @returns {number[]}
 */
function bubbleSort(nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length - i - 1; j++) {
            if (nums[j] > nums[j + 1]) {
                // swap nums
                const tempCurrent = nums[j];
                nums[j] = nums[j + 1];
                nums[j + 1] = tempCurrent;
            }
        }
    }
    
    return nums;
}

console.log(diffBig2([2, 1])); // 1
console.log(diffBig2([8, 3, 1])); // 5
console.log(diffBig2([1, 8, 3])); // 5
