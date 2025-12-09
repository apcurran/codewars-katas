"use strict";

/**
 * solution 1
 * time: O(n * m)
 * space: O(1)
 *
 * @param {number[][]} shockwaves
 * @param {number} age
 * @returns {"Safe!"|"Needs Reinforcement!"}
 */
function strongEnough(shockwaves, age) {
    const DECAY_RATE = 0.01;
    let magnitude = 1;

    for (let shockwave of shockwaves) {
        const tremorSum = shockwave.reduce((sum, currentValue) => sum + currentValue, 0);
        magnitude *= tremorSum;
    }

    const buildingEndStrength = 1000 * (1 - DECAY_RATE) ** age;

    if (magnitude > buildingEndStrength) {
        return "Needs Reinforcement!";
    } else {
        return "Safe!";
    }
}

console.log(
    strongEnough(
        [
            [2, 3, 1],
            [3, 1, 1],
            [1, 1, 2],
        ],
        2,
    ),
); // "Safe!"
console.log(
    strongEnough(
        [
            [5, 8, 7],
            [3, 3, 1],
            [4, 1, 2],
        ],
        2,
    ),
); // "Safe!"
console.log(
    strongEnough(
        [
            [5, 8, 7],
            [3, 3, 1],
            [4, 1, 2],
        ],
        3,
    ),
); // "Needs Reinforcement!"
