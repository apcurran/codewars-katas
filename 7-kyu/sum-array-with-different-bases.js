"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 *
 * @param {[string, number][]} numbersWithBases
 * @returns {number}
 */
function sumItUp(numbersWithBases) {
    let sum = 0;

    for (let [strNum, base] of numbersWithBases) {
        const value = parseInt(strNum, base);
        sum += value;
    }

    return sum;
}

console.log(
    sumItUp([
        ["101", 16],
        ["7640", 8],
        ["1", 9],
    ]),
); // 4258
