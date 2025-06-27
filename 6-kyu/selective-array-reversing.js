"use strict";

// /**
//  * solution 1
//  * n = array length
//  * m = length
//  * time: O(n * m)
//  * space: O(n)
//  * 
//  * @param {number[]} array 
//  * @param {number} length 
//  */
// function selReverse(array, length) {
//     if (length === 0) return array;

//     let reversedSections = [];

//     for (let i = 0; i < array.length; i += length) {
//         const reversedSection = array
//                                     .slice(i, i + length)
//                                     .reverse();
//         reversedSections.push(reversedSection);
//     }

//     return reversedSections.flat();
// }

/**
 * solution 2 -- slight optimization (no array.flat() copy needed)
 * n = array length
 * m = length
 * time: O(n * m)
 * space: O(n)
 * 
 * @param {number[]} array 
 * @param {number} length 
 */
function selReverse(array, length) {
    if (length === 0) return array;

    let reversedSections = [];

    for (let i = 0; i < array.length; i += length) {
        const segment = array.slice(i, i + length);

        for (let i = segment.length - 1; i >= 0; i--) {
            reversedSections.push(segment.pop());
        }
    }

    return reversedSections;
}

console.log(selReverse([1, 2, 3, 4, 5, 6], 2)); // [2,1, 4,3, 6,5]
console.log(selReverse([2, 4, 6, 8, 10, 12, 14, 16], 3)); // [6,4,2, 12,10,8, 16,14]
