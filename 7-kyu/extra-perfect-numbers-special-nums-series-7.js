"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 *
 * @param {number} n
 * @returns {number[]}
 */
function extraPerfect(n) {
    let xtraPerfectNums = [];

    for (let i = 1; i <= n; i++) {
        const binStr = i.toString(2);

        if (binStr[0] === "1" && binStr[binStr.length - 1] === "1") {
            xtraPerfectNums.push(i);
        }
    }

    return xtraPerfectNums;
}

console.log(extraPerfect(3)); // [1, 3]
console.log(extraPerfect(5)); // [1, 3, 5]
