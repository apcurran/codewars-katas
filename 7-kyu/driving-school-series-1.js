"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {number[]} list 
 * @returns {number|"No pass scores registered."}
 */
function passed(list) {
    const validScores = list.filter((score) => score <= 18);

    if (validScores.length === 0) return "No pass scores registered.";

    const validScoresSum = validScores.reduce((sum, curr) => sum + curr, 0);

    return Math.round(validScoresSum / validScores.length);
}

console.log(passed([10, 10, 10, 18, 20, 20])); // 12
