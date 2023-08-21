"use strict";

// /**
//  * solution 1
//  * time: O(n)
//  * space: O(1)
//  * 
//  * @param {number} number 
//  * @returns {number[]}
//  */
// function solution(number){
//     let threesOnlyCount = 0;
//     let fivesOnlyCount = 0;
//     let threesAndFivesCount = 0;

//     for (let i = 1; i < number; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             // is divisible by 3 AND 5
//             threesAndFivesCount++;
//         } else if (i % 3 === 0 && i % 5 !== 0) {
//             // is divisible by 3, but NOT 5
//             threesOnlyCount++;
//         } else if (i % 5 === 0 && i % 3 !== 0) {
//             // is divisible by 5, but NOT 3
//             fivesOnlyCount++;
//         }
//     }

//     return [threesOnlyCount, fivesOnlyCount, threesAndFivesCount];
// }

/**
 * solution 1
 * time: O(1)
 * space: O(1)
 * 
 * @param {number} num 
 * @returns {number[]}
 */
function solution(num){
    const numExclusive = num - 1;
    const threesAndFivesCount = Math.floor(numExclusive / 15);
    const threesOnlyCount = Math.floor(numExclusive / 3) - threesAndFivesCount;
    const fivesOnlyCount = Math.floor(numExclusive / 5) - threesAndFivesCount;

    return [threesOnlyCount, fivesOnlyCount, threesAndFivesCount];
}

console.log(solution(20)); // [5, 2, 1]
