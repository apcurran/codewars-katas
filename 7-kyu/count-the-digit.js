"use strict";

// /**
//  * Time: O(n^2)
//  * @param {number} n 
//  * @param {number} d 
//  * @returns {number}
//  */
// function nbDig(n, d) {
//     let dCount = 0;
//     let kDigitsSquares = [];

//     for (let i = 0; i <= n; i++) {
//         const kSquareVal = i ** 2;
//         kDigitsSquares.push(kSquareVal);
//     }

//     for (let square of kDigitsSquares) {
//         const squareDigits = square
//                                 .toString()
//                                 .split("")
//                                 .map((num) => +num);

//         for (let digit of squareDigits) {
//             if (digit === d) dCount++;
//         }
//     }

//     return dCount;
// }

/**
 * Time: O(n)
 * @param {number} n 
 * @param {number} d 
 * @returns {number}
 */
function nbDig(n, d) {
    let squaresCount = "";
    const myRegexCounter = new RegExp(d, "g");

    for (let i = 0; i <= n; i++) {
        squaresCount += i * i;
    }

    return squaresCount.match(myRegexCounter).length;
}

console.log( nbDig(10, 1) ); // 4
