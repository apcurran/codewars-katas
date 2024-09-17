"use strict";

// /**
//  * solution 1
//  * time: O(n)
//  * space: O(n)
//  * 
//  * @param {number[]} arr 
//  * @param {number} interval 
//  * @param {number} start 
//  * @returns {number[]}
//  */
// function every(arr, interval, start) {
//     // one argument
//     if (!interval && !start) {
//         return arr;
//     }

//     // two arguments
//     if (!start) {
//         let results = [];

//         for (let i = 0; i < arr.length; i += interval) {
//             results.push(arr[i]);
//         }

//         return results;
//     }

//     // three arguments
//     let results = [];

//     for (let i = start; i < arr.length; i += interval) {
//         results.push(arr[i]);
//     }

//     return results;
// }

/**
 * solution 2 -- refactor
 * time: O(n)
 * space: O(n)
 * 
 * @param {number[]} arr 
 * @param {number} interval 
 * @param {number} start 
 * @returns {number[]}
 */
function every(arr, interval, start) {
    let results = [];

    for (let i = start || 0; i < arr.length; i += interval || 1) {
        results.push(arr[i]);
    }

    return results;
}

console.log(every([0, 1, 2, 3, 4])); // [0,1,2,3,4]
console.log(every([0, 1, 2, 3, 4], 2)); // [0,2,4]
console.log(every([0, 1, 2, 3, 4], 3, 1)); // [1,4]

