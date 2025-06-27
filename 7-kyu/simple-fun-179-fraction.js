"use strict";

/**
 * solution 1
 * time: O(log min(a, b))
 * space: O(log min(a, b)) -- recursive callstack for getGCD func
 *
 * @param {number} numerator
 * @param {number} denominator
 * @returns {number}
 */
function fraction(numerator, denominator) {
    const commonValue = getGCD(numerator, denominator);
    const reducedNumerator = numerator / commonValue;
    const reducedDenominator = denominator / commonValue;

    return reducedNumerator + reducedDenominator;
}

console.log(fraction(2, 4)); // 1 + 2 -> 3

/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function getGCD(a, b) {
    if (b === 0) {
        return a;
    } else {
        return getGCD(b, a % b);
    }
}
