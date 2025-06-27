"use strict";

/**
 *
 * @param {array[]} arr - Array of arrays with age (int) and handicap (int).
 * @returns {array} - Returns an array of strings.
 */
function openOrSenior(arr) {
    return arr.map((innerArr) => {
        const [age, handicap] = innerArr;

        if (age >= 55 && handicap > 7) {
            return "Senior";
        }

        return "Open";
    });
}

console.log(
    openOrSenior([
        [18, 20],
        [45, 2],
        [61, 12],
        [37, 6],
        [21, 21],
        [78, 9],
    ]),
); // ["Open", "Open", "Senior", "Open", "Open", "Senior"]
