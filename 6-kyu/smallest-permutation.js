"use strict";

/**
 * solution 1
 * n = number digits length
 * time: O(n * log n)
 * space: O(n)
 * 
 * @param {number} n 
 * @returns {number}
 */
function minPermutation(n) {
    // sort digits
    let digits = String(Math.abs(n))
        .split("")
        .sort();
    // check if first digit is a leading 0,
    // if so, swap with next non 0 digit
    let i = 0;

    while (digits[i] === "0") {
        i++;
    }

    // swap
    const temp = digits[0];
    digits[0] = digits[i];
    digits[i] = temp;

    const number = Number(digits.join(""));

    return number * Math.sign(n);
}

console.log(minPermutation(-32)); // -23
console.log(minPermutation(10)); // 10
