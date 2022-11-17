"use strict";

// /**
//  * solution 1
//  * time: O(n^2) -- splice causes O(n) shifting of elems in the front/middle of arr
//  * space: O(1)
//  * 
//  * @param {number[]} x 
//  * @param {number} t 
//  * @returns {number[]}
//  */
// function trouble(x, t) {
//     // iterate arr
//     for (let i = 0; i < x.length - 1; i++) {
//         const currNum = x[i];
//         const nextNum = x[i + 1];
//         // check if currNum and nextNum sum to target t
//         const sum = currNum + nextNum;
//
//         if (sum === t) {
//             x.splice(i + 1, 1);
//             i--;
//         }
//     }

//     return x;
// }

/**
 * solution 2
 * time: O(n) -- no splicing of arr
 * space: O(n)
 * 
 * @param {number[]} x 
 * @param {number} t 
 * @returns {number[]}
 */
function trouble(x, t) {
    let res = [x[0]];
    // iterate arr
    for (let i = 0; i < x.length - 1; i++) {
        const currNum = x[i];
        const nextNum = x[i + 1];
        // check if currNum and nextNum sum to target t
        const sum = currNum + nextNum;

        if (sum !== t) {
            res.push(nextNum);
        }
    }

    return res;
}

console.log( trouble([1, 2, 3, 4, 5], 3) ); // [1, 3, 4, 5]
console.log( trouble([4, 1, 1, 1, 4],2) ); // [4, 1, 4]
console.log( trouble([1, 2, 3, 4, 5], 3) ); // [1, 3, 4, 5]
