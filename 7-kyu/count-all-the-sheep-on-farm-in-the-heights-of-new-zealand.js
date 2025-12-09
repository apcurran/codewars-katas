"use strict";

/**
 * solution 1
 * time: O(n + m)
 * space: O(1)
 *
 * @param {number[]} sheepFriday
 * @param {number[]} sheepSaturday
 * @param {number} sheepTotal
 * @returns {number}
 */
function lostSheep(sheepFriday, sheepSaturday, sheepTotal) {
    const sheepFridaySum = sheepFriday.reduce((sum, current) => sum + current, 0);
    const sheepSaturdaySum = sheepSaturday.reduce((sum, current) => sum + current, 0);

    return sheepTotal - sheepFridaySum - sheepSaturdaySum;
}

console.log(lostSheep([1, 2], [3, 4], 15)); // 5
