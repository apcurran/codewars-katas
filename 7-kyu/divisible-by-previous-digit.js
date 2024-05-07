"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {number} n 
 * @returns {boolean[]}
 */
function divisibleByLast(n) {
    const strNum = String(n);
    let areDigitsDivisible = [false];

    for (let i = 1; i < strNum.length; i++) {
        const currentDigit = Number(strNum[i]);
        const previousDigit = Number(strNum[i - 1]);

        if (previousDigit === 0) {
            // cannot divide by zero
            areDigitsDivisible.push(false);
            
            continue;
        }

        const isDigitDivisible = currentDigit % previousDigit === 0;
        areDigitsDivisible.push(isDigitDivisible);
    }

    return areDigitsDivisible;
}

console.log(divisibleByLast(73312)); // [false, false, true, false, true]
