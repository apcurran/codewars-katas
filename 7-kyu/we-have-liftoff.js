"use strict";

/**
 * solution 1
 * time: O(n * log n)
 * space: O(n)
 *
 * @param {number[]} instructions
 * @returns {string}
 */
function liftoff(instructions) {
    instructions.sort((a, b) => b - a);
    const instructionsStr = instructions.join(" ");

    return `${instructionsStr} liftoff!`;
}

console.log(liftoff([8, 1, 10, 2, 7, 9, 6, 3, 4, 5])); // "10 9 8 7 6 5 4 3 2 1 liftoff!"
