"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {string} str 
 * @returns {string}
 */
function averageString(str) {
    // edge case -- empty string
    if (str === "") return "n/a";

    const splitNumStrs = str.split(" ");
    // decode map (strNum -> num)
    const decodeFromStr = new Map([
        ["zero", 0],
        ["one", 1],
        ["two", 2],
        ["three", 3],
        ["four", 4],
        ["five", 5],
        ["six", 6],
        ["seven", 7],
        ["eight", 8],
        ["nine", 9],
    ]);
    // encode map (num -> strNum)
    const encodeToStr = new Map([
        [0, "zero"],
        [1, "one"],
        [2, "two"],
        [3, "three"],
        [4, "four"],
        [5, "five"],
        [6, "six"],
        [7, "seven"],
        [8, "eight"],
        [9, "nine"],
    ]);

    let numTotal = 0;

    for (let numStr of splitNumStrs) {
        // edge case -- num greater than 9
        if (Number(numStr) > 9) {
            return "n/a";
        }

        const numValue = decodeFromStr.get(numStr);
        numTotal += numValue;
    }

    const numAverage = Math.floor(numTotal / splitNumStrs.length);

    return encodeToStr.get(numAverage) || "n/a";
}

console.log(averageString("zero nine five two")); // "four"
