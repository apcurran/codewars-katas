"use strict";

// /**
//  * solution 1 -- two pointers (Fails -- does not return FIRST valid pair)
//  * time: O(n)
//  * space: O(1)
//  *
//  * @param {number[]} numbers - already sorted list of nums
//  * @param {number} c
//  * @returns {[number, number]|null}
//  */
// function findAB(numbers, c) {
//     let left = 0;
//     let right = numbers.length - 1;

//     while (left < right) {
//         const a = numbers[left];
//         const b = numbers[right];
//         const product = a * b;

//         if (product === c) {
//             return [a, b];
//         } else if (product < c) {
//             // make product larger by increasing left index
//             left++;
//         } else {
//             // make product smaller by decreasing right index
//             right--;
//         }
//     }

//     return null;
// }

console.log(findAB([1, 2, 3], 3)); // [1, 3]
console.log(findAB([1, 2, 3], 6)); // [2, 3]
console.log(findAB([1, 2, 3], 7)); // null
console.log(findAB([-3, -2, -2, -1, 0, 1, 2, 3, 4], 4)); // [-2, -2]
