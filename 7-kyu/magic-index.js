"use strict";

// /**
//  * solution 1
//  * time: O(n)
//  * space: O(1)
//  *
//  * @param {number[]} arr
//  * @returns {number}
//  */
// function findMagic(arr){
//     for (let i = 0; i < arr.length; i++) {
//         const value = arr[i];

//         if (value === i) return i;
//     }

//     return -1;
// }

/**
 * solution 2
 * time: O(n)
 * space: O(1)
 *
 * @param {number[]} arr
 * @returns {number}
 */
function findMagic(arr) {
    return arr.findIndex((value, i) => value === i);
}

console.log(findMagic([-20, -10, 2, 10, 20])); // 2
console.log(findMagic([6, 5, 83, 5, 3, 18])); // -1
