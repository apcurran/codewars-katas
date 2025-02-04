"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1) -- not counting results array
 * 
 * @param {[][]} tuples 
 * @param {number} chairsNeeded 
 * @returns {number[]|"Game On"|"Not enough!"}
 */
function meeting(tuples, chairsNeeded) {
    if (chairsNeeded === 0) {
        // none needed
        return "Game On";
    }

    let borrowedChairs = [];

    for (let [occupantsStr, roomChairs] of tuples) {
        const chairs = Math.max(0, roomChairs - occupantsStr.length);
        const availableChairs = Math.min(chairsNeeded, chairs);
        borrowedChairs.push(availableChairs);
        chairsNeeded -= availableChairs;

        if (chairsNeeded <= 0) {
            return borrowedChairs;
        }
    }

    return "Not enough!";
}

console.log(meeting([["XXX", 3], ["XXXXX", 6], ["XXXXXX", 9]], 4)); // [0, 1, 3]
console.log(meeting([["XXX", 1], ["XXXXXX", 6], ["X", 2], ["XXXXXX", 8], ["X", 3], ["XXX", 1]], 5)); // [0, 0, 1, 2, 2]
console.log(meeting([["XX", 2], ["XXXX", 6], ["XXXXX", 4]], 0)); // "Game On"
