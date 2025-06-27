"use strict";

/**
 * solution 1
 * time: O(1)
 * space: O(1)
 *
 * @param {string} prob1
 * @param {string} prob2
 * @returns {boolean}
 */
function mostLikely(prob1, prob2) {
    const [prob1First, prob1Second] = prob1.split(":");
    const probability1Value = Number(prob1First) / Number(prob1Second);

    const [prob2First, prob2Second] = prob2.split(":");
    const probability2Value = Number(prob2First) / Number(prob2Second);

    return probability1Value > probability2Value;
}

console.log(mostLikely("1:3", "1:2")); // false (1/3 is less likely than 1/2)
