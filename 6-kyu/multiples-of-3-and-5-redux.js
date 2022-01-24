"use strict";

// /**
//  * Solution 1 -- O(n) -> too slow...
//  * @param {*} n 
//  * @returns {number}
//  */
// function solution(n) {
//     let sum = 0;

//     for (let i = 3; i < n; i++) {
//         if (i % 5 === 0 || i % 3 === 0) {
//             sum += i;
//         }
//     }

//     return sum;
// }

/**
 * Solution 2 -- O(1)
 * @param {*} n
 * @returns {number}
 */
function solution(n) {
    n = n - 1;

    // Sum of multiples formula
    // n = floor(N / M)
    // n * (n + 1) * M / 2

    // floor(10 / 3)

    const threesN = Math.floor(n / 3);
    const sumMultiplesOfThree = threesN * (1 + threesN) * 3 / 2;

    const fivesN = Math.floor(n / 5);
    const sumMultiplesOfFive = fivesN * (1 + fivesN) * 5 / 2;
    
    const fifteensN = Math.floor(n / 15);
    const sumMultiplesOfFifteen = fifteensN * (1 + fifteensN) * 15 / 2;

    return sumMultiplesOfThree + sumMultiplesOfFive - sumMultiplesOfFifteen;
}

console.log( solution(10) ); // 23
console.log( solution(20) ); // 78