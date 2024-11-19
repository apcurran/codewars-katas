"use strict";

/**
 * solution 1 -- recursion
 * time: O(n * log n)
 * space: O(n + log n)
 * 
 * @param {number} n 
 * @returns {number}
 */
function singleDigit(n) {
    // if int is already a single digit, return int
    if (n <= 9) return n;

    // convert int to bin
    const binStr = n.toString(2);
    // sum binary digits
    const binStrDigitsSum = binStr
        .split("")
        .reduce(function sumDigits(sum, digitStr) {
            return sum + Number(digitStr);
        }, 0);

    // check if sum is a single digit
    // if yes, return int
    if (binStrDigitsSum <= 9) return binStrDigitsSum;
    // if no, repeat
    return singleDigit(binStrDigitsSum);
}

console.log(singleDigit(5665)); // 5
console.log(singleDigit(123456789)); // 1
