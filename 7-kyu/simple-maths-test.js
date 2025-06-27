"use strict";

/**
 * solution 1
 * time: O(sqrt(n))
 * space: O(1)
 *
 * @param {number} n
 * @returns {[boolean, boolean, boolean]}
 */
function numberProperty(n) {
    const isNPrime = isPrime(n);
    const isNEven = isEven(n);
    const isNMultipleOf10 = isMultipleOf10(n);

    return [isNPrime, isNEven, isNMultipleOf10];
}

console.log(numberProperty(7)); // [true, false, false]

/**
 * @param {number} num
 * @returns {boolean}
 */
function isPrime(num) {
    let s = Math.sqrt(num);

    for (let i = 2; i <= s; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return num >= 2;
}

/**
 * @param {number} num
 * @returns {boolean}
 */
function isEven(num) {
    return num % 2 === 0;
}

/**
 * @param {number} num
 * @returns {boolean}
 */
function isMultipleOf10(num) {
    return num % 10 === 0;
}
