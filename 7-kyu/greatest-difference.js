"use strict";

/**
 * solution 1
 * n = str length
 * m = numCouple length
 * time: O(n)
 * space: O(m)
 *
 * @param {string[]} str
 * @returns {string|false}
 */
function diff(str) {
    let maxDiff = 0;
    let largestDiffStr = "";

    for (let numCouple of str) {
        const [num1Str, num2Str] = numCouple.split("-");
        const currentDiff = Math.abs(Number(num1Str) - Number(num2Str));

        if (currentDiff > maxDiff) {
            maxDiff = currentDiff;
            largestDiffStr = numCouple;
        }
    }

    if (maxDiff === 0) {
        return false;
    } else {
        return largestDiffStr;
    }
}

console.log(diff(["23-32", "32-23", "2-6", "98-98", "100-101"])); // "23-32"
console.log(diff(["22-22", "56-56"])); // false
console.log(diff(["52542-522", "0-1000000"])); // "0-1000000"
