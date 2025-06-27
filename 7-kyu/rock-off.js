"use strict";

/**
 * solution 1
 * time: O(1) -- array sizes are fixed at 3
 * space: O(1)
 *
 * @param {number[]} aliceScores
 * @param {number[]} bobScores
 * @returns {string}
 */
function solve(aliceScores, bobScores) {
    let alicePoints = 0;
    let bobPoints = 0;

    for (let i = 0; i < aliceScores.length; i++) {
        const aliceScore = aliceScores[i];
        const bobScore = bobScores[i];

        if (aliceScore > bobScore) {
            alicePoints++;
        } else if (bobScore > aliceScore) {
            bobPoints++;
        }
    }

    if (alicePoints > bobPoints) {
        return `${alicePoints}, ${bobPoints}: Alice made "Kurt" proud!`;
    } else if (bobPoints > alicePoints) {
        return `${alicePoints}, ${bobPoints}: Bob made "Jeff" proud!`;
    } else {
        return `${alicePoints}, ${bobPoints}: that looks like a "draw"! Rock on!`;
    }
}

console.log(solve([47, 7, 2], [47, 7, 2])); // "0, 0: that looks like a \"draw\"! Rock on!");
console.log(solve([47, 67, 22], [26, 47, 12])); // "3, 0: Alice made \"Kurt\" proud!");
console.log(solve([25, 50, 22], [34, 49, 50])); // "1, 2: Bob made \"Jeff\" proud!");
