"use strict";

// /**
//  * solution 1
//  * time: O(n * log n)
//  * space: O(log n)
//  * 
//  * @param {number[]} arr 
//  * @returns {number}
//  */
// function arrayConversion(arr) {
//     let turns = 0;

//     while (arr.length > 1) {
//         let modifiedNums = [];

//         for (let i = 0; i < arr.length - 1; i += 2) {
//             const num1 = arr[i];
//             const num2 = arr[i + 1];

//             if (turns % 2 === 0) {
//                 // replace each pair of consecutive elements with their sum
//                 const sum = num1 + num2;
//                 modifiedNums.push(sum);
//             } else {
//                 // replace each pair of consecutive elements with their product
//                 const product = num1 * num2;
//                 modifiedNums.push(product);
//             }
//         }

//         turns++;
//         arr = modifiedNums;
//     }

//     return arr[0];
// }

/**
 * solution 2 -- recursion
 * time: O(n * log n)
 * space: O(log n)
 * 
 * @param {number[]} arr 
 * @returns {number}
 */
function arrayConversion(arr, turnCount = 0) {
    if (arr.length === 1) {
        // base case
        return arr[0];
    }

    let modifiedNums = [];

    for (let i = 0; i < arr.length - 1; i += 2) {
        const num1 = arr[i];
        const num2 = arr[i + 1];

        if (turnCount % 2 === 0) {
            // replace each pair of consecutive elements with their sum
            const sum = num1 + num2;
            modifiedNums.push(sum);
        } else {
            // replace each pair of consecutive elements with their product
            const product = num1 * num2;
            modifiedNums.push(product);
        }
    }

    const updatedTurnCount = turnCount + 1;

    return arrayConversion(modifiedNums, updatedTurnCount);
}

console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8])); // 186
