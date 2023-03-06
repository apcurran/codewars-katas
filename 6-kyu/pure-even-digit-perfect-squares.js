"use strict";

/**
 * solution 1
 * time: O(sqrt(n))
 * space: O(sqrt(n))
 * 
 * @param {number} a 
 * @param {number} b 
 * @returns {number[]}
 */
function evenDigitSquares(a, b) {
    let results = [];

    numsLoop: for (let i = Math.ceil(Math.sqrt(a)); i <= Math.sqrt(b); i++) {
        const num = i ** 2;
        const isPerfectSquare = Number.isInteger(Math.sqrt(num));

        if (!isPerfectSquare) continue;

        // otherwise, check for even digits
        const strDigits = String(num).split("");

        for (let strDigit of strDigits) {
            const isEvenDigit = Number(strDigit) % 2 === 0;
            
            if (!isEvenDigit) continue numsLoop;
        }

        results.push(num);
    }

    return results;
}

console.log( evenDigitSquares(100, 1000) ); // [400, 484]
