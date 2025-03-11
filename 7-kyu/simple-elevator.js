"use strict";

/**
 * solution 1
 * time: O(1)
 * space: O(1)
 * 
 * @param {number} level 
 * @param {string} button 
 * @returns {number}
 */
function goto(level, button) {
    const possibleLevels = [0, 1, 2, 3];
    const possibleButtons = ["0", "1", "2", "3"];

    if (!possibleLevels.includes(level)) return 0;

    if (!possibleButtons.includes(button)) return 0;

    return Number(button) - level;
}

console.log(goto(0, "2")); // 2
console.log(3 + goto(3, "1")); // 1
console.log(2 + goto(2, "2")); // 2
