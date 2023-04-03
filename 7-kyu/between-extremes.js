"use strict";

// /**
//  * solution 1
//  * time: O(n)
//  * space: O(n)
//  * 
//  * @param {number[]} numbers 
//  * @returns {number}
//  */
// function betweenExtremes(numbers) {
//     const max = Math.max(...numbers);
//     const min = Math.min(...numbers);

//     return max - min;
// }

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 * 
 * @param {number[]} numbers 
 * @returns {number}
 */
function betweenExtremes(numbers) {
    let max = -Infinity;
    let min = Infinity;

    for (let num of numbers) {
        if (num > max) {
            max = num;
        }

        if (num < min) {
            min = num;
        }
    }

    return max - min;
}

console.log( betweenExtremes([23, 3, 19, 21, 16]) ); // 23 - 3 -> 20
