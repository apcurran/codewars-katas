"use strict";

/**
 * solution 1
 * time: O(sqrt(n))
 * space: O(1)
 *
 * @param {number} num
 * @returns {boolean}
 */
function isPrime(num) {
    if (num <= 1) return false;

    const limit = Math.sqrt(num);

    for (let i = 2; i <= limit; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

console.log(isPrime(0)); // false
console.log(isPrime(1)); // false
console.log(isPrime(2)); // true
console.log(isPrime(73)); // true
console.log(isPrime(75)); // false
console.log(isPrime(-1)); // false
