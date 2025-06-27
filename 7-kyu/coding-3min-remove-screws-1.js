"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 *
 * @param {string} screws
 * @returns {number}
 */
function sc(screws) {
    const TIME_TO_SWITCH_SCREWDRIVER_TYPE = 5;
    const TIME_TO_REMOVE_SCREW_AND_MOVE = 2;
    let totalTimeInSeconds = TIME_TO_REMOVE_SCREW_AND_MOVE;

    for (let i = 1; i < screws.length; i++) {
        const currentScrew = screws[i];
        const previousScrew = screws[i - 1];

        if (currentScrew !== previousScrew) {
            totalTimeInSeconds += TIME_TO_SWITCH_SCREWDRIVER_TYPE;
        }

        totalTimeInSeconds += TIME_TO_REMOVE_SCREW_AND_MOVE;
    }

    // subtract time to move to next screw for last iteration (no next screw)
    return totalTimeInSeconds - 1;
}

console.log(sc("---+++")); // 16
console.log(sc("-+-+-+")); // 36
console.log(sc("-+-+-----------")); // 49
console.log(sc("-+-+-++++++++++")); // 54
