"use strict";

/**
 * solution 1 -- iterative
 * time: O(n)
 * space: O(1)
 *
 * @param {string} moment
 * @returns {boolean[]}
 */
function momentOfTimeInSpace(moment) {
    let timeSum = 0;
    let spaceCharLen = 0;
    // iterate over chars in moment str
    for (let char of moment) {
        // for each char, check if converted to num >= 1 and num <= 9
        const possibleNumChar = Number(char);

        if (possibleNumChar >= 1 && possibleNumChar <= 9) {
            // if yes, then add char to sum total (time total)
            timeSum += possibleNumChar;
            continue;
        }
        // otherwise, count chars len other than nums 1 - 9 (space len)
        spaceCharLen++;
    }

    if (timeSum > spaceCharLen) {
        return [false, false, true];
    } else if (timeSum === spaceCharLen) {
        return [false, true, false];
    } else {
        return [true, false, false];
    }
}

console.log(momentOfTimeInSpace("12:30 am")); // [false, false, true]
