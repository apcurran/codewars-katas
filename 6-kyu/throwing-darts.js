"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 *
 * @param {number[]} radii
 * @returns {number}
 */
function scoreThrows(radii) {
    if (radii.length === 0) return 0;

    const BONUS_POINTS = 100;
    const areAllRadiiLessThanFive = radii.every((radius) => radius < 5);
    let totalScore = 0;

    if (areAllRadiiLessThanFive) {
        totalScore += BONUS_POINTS;
    }

    for (let radius of radii) {
        if (radius < 5) {
            totalScore += 10;
        } else if (radius >= 5 && radius <= 10) {
            totalScore += 5;
        }
    }

    return totalScore;
}

console.log(scoreThrows([1, 5, 11])); // 15
console.log(scoreThrows([15, 20, 30])); // 0
console.log(scoreThrows([1, 2, 3, 4])); // 140
