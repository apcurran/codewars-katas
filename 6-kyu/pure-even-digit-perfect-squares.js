"use strict";

/**
 * solution 1
 * time: O(n * sqrt(n))
 * space: O(sqrt(n))
 * 
 * @param {number} a 
 * @param {number} b 
 * @returns {number[]}
 */
function evenDigitSquares(a, b) {
    let results = [];

    numsLoop: for (let i = a; i <= b; i++) {
        const isPerfectSquare = Number.isInteger(Math.sqrt(i));

        if (!isPerfectSquare) continue;

        // otherwise, check for even digits
        const strDigits = String(i).split("");

        for (let strDigit of strDigits) {
            const isEvenDigit = Number(strDigit) % 2 === 0;
            
            if (!isEvenDigit) continue numsLoop;
        }

        results.push(i);
    }

    return results;
}

console.log( evenDigitSquares(100, 1000) ); // [400, 484]
