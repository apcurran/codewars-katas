"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 *
 * @param {string} s1
 * @param {string} s2
 * @returns {number[]}
 */
function spot(s1, s2) {
    let differences = [];

    for (let i = 0; i < s1.length; i++) {
        const s1Char = s1[i];
        const s2Char = s2[i];

        if (s1Char !== s2Char) {
            differences.push(i);
        }
    }

    return differences;
}

console.log(spot("abcdefg", "abcqetg")); // [3, 5]
