"use strict";

// /**
//  * solution 1 -- JSON.stringify() method
//  * time: O(n * log n) -- sorting first
//  * space: O(n)
//  * 
//  * @param {number[]} arr 
//  * @returns {string}
//  */
// function isSortedAndHow(arr) {
//     const JSONOrigArr = JSON.stringify(arr);
//     const JSONSortedAsc = JSON.stringify( [...arr].sort((a, b) => a - b) );
//     const JSONSortedDesc = JSON.stringify( [...arr].sort((a, b) => b - a) );

//     if (JSONOrigArr === JSONSortedAsc) {
//         return "yes, ascending";
//     } else if (JSONOrigArr === JSONSortedDesc) {
//         return "yes, descending";
//     } else {
//         return "no";
//     }
// }

/**
 * solution 2 -- JSON.stringify() method
 * time: O(n)
 * space: O(1)
 * 
 * @param {number[]} arr 
 * @returns {string}
 */
function isSortedAndHow(arr) {
    let isArrAsc = false;
    let isArrDesc = false;

    for (let i = 1; i < arr.length; i++) {
        const currVal = arr[i];
        const prevVal = arr[i - 1];

        if (currVal > prevVal) {
            isArrAsc = true;
        } else if (currVal < prevVal) {
            isArrDesc = true;
        }
    }

    if (isArrAsc && isArrDesc) {
        return "no";
    } else if (isArrAsc) {
        return "yes, ascending";
    } else if (isArrDesc) {
        return "yes, descending";
    }
}

console.log( isSortedAndHow([15, 7, 3, -8]) ); // "yes, descending"
console.log( isSortedAndHow([1, 2]) ); // "yes, ascending"
console.log( isSortedAndHow([4, 2, 30]) ); // "no"
