"use strict";

/**
 * solution 1 -- regex
 * time: O(n)
 * space: O(n)
 *
 * @param {number} num
 * @returns {number}
 */
function gap(num) {
    const numBinaryStr = num.toString(2);
    // match 0s with 1s in front and behind
    // fallback to empty array if none found
    const matches = numBinaryStr.match(/(?<=1)0+(?=1)/g) || [];
    let mostConsecutiveZerosCount = 0;

    for (let match of matches) {
        mostConsecutiveZerosCount = Math.max(mostConsecutiveZerosCount, match.length);
    }

    return mostConsecutiveZerosCount;
}

console.log(gap(9)); // 2
console.log(gap(529)); // 4
