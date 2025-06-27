"use strict";

/**
 * solution 1
 * time: O(n^2)
 * space: O(n^2)
 *
 * @param {number} num
 * @returns {string}
 */
function generateShape(num) {
    let resStr = "";

    for (let i = 0; i < num; i++) {
        const rowStr = "+".repeat(num);
        resStr += rowStr + "\n";
    }

    return resStr.trim();
}

// /**
//  * solution 2
//  * time: O(n^2)
//  * space: O(n^2)
//  *
//  * @param {number} num
//  * @returns {string}
//  */
// function generateShape(num) {
//     let resStr = "";

//     for (let i = 0; i < num; i++) {
//         let rowStr = "";

//         for (let i = 0; i < num; i++) {
//             rowStr += "+";
//         }

//         const fullRowStr = i === num - 1 ? rowStr : rowStr + "\n";

//         resStr += fullRowStr;
//     }

//     return resStr;
// }

console.log(generateShape(3));
