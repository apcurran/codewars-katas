"use strict";

/**
 * solution 1
 * time: O(n^2) - string is an iterable created inside of a loop
 * space: O(n^2) - string is an iterable created inside of a loop
 *
 * @param {number} nFloors
 * @returns {string[]}
 */
function towerBuilder(nFloors) {
    const totalCharsPerLevel = nFloors * 2 - 1;
    let finishedTower = [];
    // iterate nFloors times

    for (let i = 1; i <= nFloors; i++) {
        // for each floor, create level
        const levelStarsCt = i * 2 - 1;
        const levelStarsStr = "*".repeat(levelStarsCt);
        const spacesCt = (totalCharsPerLevel - levelStarsCt) / 2;
        const spacesStr = " ".repeat(spacesCt);
        const levelStr = `${spacesStr}${levelStarsStr}${spacesStr}`;
        finishedTower.push(levelStr);
    }

    return finishedTower;
}

console.log(towerBuilder(3));
// [
//     "  *  ",
//     " *** ",
//     "*****"
// ]
