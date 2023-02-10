"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 * 
 * @param {number} n 
 * @returns {number}
 */
function differenceOfSquares(n) {
    let nNumbersSum = 0;
    let nNumbersSquaresSum = 0;

    for (let i = 1; i <= n; i++) {
        nNumbersSum += i;

        const currentNumberSquared = i ** 2;
        nNumbersSquaresSum += currentNumberSquared;
    }

    const nNumbersSumSquared = nNumbersSum ** 2;

    return nNumbersSumSquared - nNumbersSquaresSum;
}

console.log( differenceOfSquares(5) ); // 170