"use strict";

/**
 * solution 1 -- brute force (correct, but TLE)
 * time: O(n^2)
 * space: O(1)
 * 
 * @param {number} goalSum 
 * @param {number} left 
 * @param {number} right 
 * @returns {number}
 */
function countSumOfTwoRepresentations(goalSum, left, right) {
    let validSumsCount = 0;

    for (let a = left; a <= right; a++) {
        for (let b = left; b <= right; b++) {
            if (a > b) continue;

            const currentSum = a + b;

            if (currentSum > goalSum) {
                break;
            }

            if (currentSum === goalSum) {
                validSumsCount++;
            }
        }
    }

    return validSumsCount;
}

console.log(countSumOfTwoRepresentations(6, 2, 4)); // 2 -> (2 + 4 = 6) (3 + 3 = 6)
