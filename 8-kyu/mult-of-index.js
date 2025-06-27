"use strict";

// /**
//  * solution 1
//  * time: O(n)
//  * space: O(n)
//  *
//  * @param {number[]} arr
//  * @returns {number[]}
//  */
// function multipleOfIndex(arr) {
//     let resArr = [];

//     for (let i = 0; i < arr.length; i++) {
//         const val = arr[i];

//         if (val % i === 0 || val === 0) {
//             resArr.push(val);
//         }
//     }

//     return resArr;
// }

/**
 * solution 2
 * time: O(n)
 * space: O(n)
 *
 * @param {number[]} arr
 * @returns {number[]}
 */
function multipleOfIndex(arr) {
    return arr.filter((num, i) => num % i === 0);
}

console.log(multipleOfIndex([22, -6, 32, 82, 9, 25])); // [-6, 32, 25]
console.log(
    multipleOfIndex([
        0, -56, -85, 72, -26, -14, 76, -27, 72, 35, -21, -67, 87, 21, 59, 27,
        -92, 68,
    ]),
); // [-85, 72, 0, 68]
