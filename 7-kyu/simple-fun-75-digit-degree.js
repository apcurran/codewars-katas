"use strict";

/**
 * solution 1 -- recursion
 * m = strNum length
 * time: O(log n * m)
 * space: O(log n + m) -- stack space and strNum string coercion
 * 
 * @param {number} n 
 * @returns {number} count
 */
function digitDegree(n, count = 0) {
    const strNum = String(n);

    if (strNum.length === 1) {
        return count;
    }

    // otherwise,
    // sum digits
    let digitsSum = 0;

    for (let digitStr of strNum) {
        const digit = Number(digitStr);
        digitsSum += digit;
    }

    // increment counter
    return digitDegree(digitsSum, count + 1);
}

console.log(digitDegree(5)); // 0
console.log(digitDegree(100)); // 1
console.log(digitDegree(91)); // 2
