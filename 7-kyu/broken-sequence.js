"use strict";

/**
 * solution 1 -- regex and hashset
 * time: O(n)
 * space: O(n)
 *
 * @param {string} sequence
 * @returns {number}
 */
function findMissingNumber(sequence) {
    if (sequence === "") {
        return 0;
    }

    const hasNonNumericValue = /\D/.test(sequence.replace(/ /g, ""));

    if (hasNonNumericValue) {
        return 1;
    }

    const nums = sequence.split(" ").map(Number);
    const seenValues = new Set(nums);

    for (let i = 1; i <= nums.length; i++) {
        if (!seenValues.has(i)) {
            return i;
        }
    }

    return 0;
}

console.log(findMissingNumber("1 2 3 5")); // 4
console.log(findMissingNumber("1 3")); // 2
console.log(findMissingNumber("")); // 0
