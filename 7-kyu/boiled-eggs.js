"use strict";

/**
 * solution 1 -- math
 * time: O(1)
 * space: O(1)
 * 
 * @param {number} totalEggs 
 * @returns {number} time to boil all eggs
 */
function cookingTime(totalEggs) {
    const TIME_TO_BOIL_EGG = 5;
    const EGGS_PER_BATCH = 8;

    // round up to nearest 5 minute mark
    return Math.ceil(totalEggs / EGGS_PER_BATCH) * TIME_TO_BOIL_EGG;
}

console.log( cookingTime(0) ); // 0
console.log( cookingTime(5) ); // 5
console.log( cookingTime(10) ); // 10
