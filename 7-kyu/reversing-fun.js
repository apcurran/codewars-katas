"use strict";

/**
 * solution 1 -- recursion
 * time: O(n^2) -- loops inside of call stack
 * space: O(n)
 * 
 * @param {string} n 
 * @param {number} positionCounter 
 * @returns {string}
 */
function flipNumber(n, positionCounter = 0) {
    if (positionCounter === n.length) {
        return n;
    }

    const beginningSection = n.slice(0, positionCounter);
    const sectionToReverse = n.slice(positionCounter);
    let reversedSection = "";

    for (let i = sectionToReverse.length - 1; i >= 0; i--) {
        reversedSection += sectionToReverse[i];
    }

    const reversed = `${beginningSection}${reversedSection}`;

    return flipNumber(reversed, positionCounter + 1);
}

console.log(flipNumber("012345")); // "504132"
