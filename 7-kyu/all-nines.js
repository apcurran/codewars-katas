"use strict";

/**
 * solution 1 -- correct, but TLE
 * time: O(m * x)
 * space: O(m)
 *
 * @param {bigint} x
 * @returns {bigint}
 */
function allNines(x) {
    // if x is even, return -1 (no possible all nines num)
    if (x % 2n === 0n) return -1n;

    for (let m = 1n; m < Infinity; m++) {
        const product = m * x;

        if (areDigitsNines(product)) {
            return m;
        }
    }

    return -1n;
}

console.log(allNines(11n)); // 9n
console.log(allNines(12n)); // -1n
console.log(allNines(13n)); // 76923n

/**
 * @param {bigint} num
 * @returns {boolean}
 */
function areDigitsNines(num) {
    const strNum = String(num);

    for (let i = 0; i < strNum.length; i++) {
        if (strNum[i] !== "9") {
            return false;
        }
    }

    return true;
}
