"use strict";

/**
 * solution 1
 * m = length of binary num str
 * time: O(n * m)
 * space: O(m) -- not including results array
 *
 * @param {number} n
 * @returns {number[]|"No pernicious numbers"}
 */
function pernicious(n) {
    let results = [];

    if (n < 3) {
        return "No pernicious numbers";
    }

    for (let i = 3; i <= n; i++) {
        const numHammingWeight = getHammingWeight(i);
        const isNumHammingWeightPrime = isPrime(numHammingWeight);

        if (isNumHammingWeightPrime) {
            results.push(i);
        }
    }

    if (results.length === 0) {
        return "No pernicious numbers";
    } else {
        return results;
    }
}

/**
 * @param {number} num
 * @returns {number} binary sum
 */
function getHammingWeight(num) {
    const binaryNumStr = num.toString(2);
    let binarySum = 0;

    for (let binaryDigitStr of binaryNumStr) {
        binarySum += Number(binaryDigitStr);
    }

    return binarySum;
}

/**
 * @param {number} num
 * @returns {boolean}
 */
function isPrime(num) {
    if (num <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

console.log(pernicious(5)); // [3, 5]
console.log(pernicious(12)); // [3, 5, 6, 7, 9, 10, 11, 12]
