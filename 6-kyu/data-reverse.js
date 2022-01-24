"use strict";

// /**
//  * Solution 1
//  * Time: O(n)
//  * @param {number[]} data 
//  * @returns {number[]}
//  */
// function dataReverse(data) {
//     let resArr = [];

//     for (let i = 0; i < data.length; i += 8) {
//         const byteArr = data.slice(i, i + 8);
//         resArr.push(byteArr);
//     }

//     return resArr
//             .reverse()
//             .flat();
// }

/**
 * Solution 1
 * Time: O(n^2)
 * @param {number[]} data 
 * @returns {number[]}
 */
function dataReverse(data) {
    let resArr = [];

    for (let i = 0; i < data.length; i += 8) {
        const byteArr = data.slice(i, i + 8);
        resArr.unshift(...byteArr);
    }

    return resArr;
}

console.log( dataReverse([1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]) ); // [1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1]