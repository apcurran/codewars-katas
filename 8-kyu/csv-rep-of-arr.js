"use strict";

// /**
//  * solution 1
//  * time: O(n * m) 
//  * space: O(n + m)
//  * 
//  * @param {number[][]} arr 
//  * @returns {string}
//  */
// function toCsvText(arr) {
//     let res = "";

//     for (let i = 0; i < arr.length; i++) {
//         const currArr = arr[i];
//         const numStr = currArr.join(",");

//         res += numStr;

//         if (i === arr.length - 1) continue;

//         res += "\n";
//     }

//     return res;
// }

/**
 * solution 2 -- slight optimizations
 * time: O(n * m) 
 * space: O(n + m)
 * 
 * @param {number[][]} arr 
 * @returns {string}
 */
function toCsvText(arr) {
    return arr.join("\n");
}

console.log( toCsvText(
    [
        [0, 1, 2, 3, 45],
        [10, 11, 12, 13, 14],
        [20, 21, 22, 23, 24],
        [30, 31, 32, 33, 34]
    ]
) );
