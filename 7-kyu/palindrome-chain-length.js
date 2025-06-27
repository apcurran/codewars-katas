"use strict";

/**
 * Solution 1
 * time: O(n^2)
 * space: O(n^2)
 * 
 * @param {number} n 
 * @returns {number}
 */
function palindromeChainLength(n) {
    const reversedNumDigits = reverseDigits(n);

    if (n !== reversedNumDigits) {
        return 1 + palindromeChainLength(n + reversedNumDigits);
    }

    return 0;
}

function reverseDigits(num) {
    return +num
        .toString()
        .split("")
        .reverse()
        .join("");
}

console.log( palindromeChainLength(87) ); // 4
console.log( palindromeChainLength(89) ); // 24
