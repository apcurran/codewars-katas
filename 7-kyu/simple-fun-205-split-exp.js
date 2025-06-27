"use strict";

/**
 * solution 1
 * time: O(n^2)
 * space: O(n)
 *
 * @param {string} n
 * @returns {string[]}
 */
function splitExp(n) {
    const [wholeNumPortion, decimalPortion] = n.split(".");
    let results = [];

    for (let i = 0; i < wholeNumPortion.length; i++) {
        // skip "0"s
        if (wholeNumPortion[i] === "0") continue;

        // digit with zeroes on the right
        const numStr = `${wholeNumPortion[i]}${"0".repeat(wholeNumPortion.length - i - 1)}`;
        results.push(numStr);
    }

    if (decimalPortion) {
        for (let i = 0; i < decimalPortion.length; i++) {
            // skip "0"s
            if (decimalPortion[i] === "0") continue;

            // decimal followed by zeroes, then digit
            const numStr = `.${"0".repeat(i)}${decimalPortion[i]}`;
            results.push(numStr);
        }
    }

    return results;
}

console.log(splitExp("7970521.5544"));
// [
//     "7000000",
//     "900000",
//     "70000",
//     "500",
//     "20",
//     "1",
//     ".5",
//     ".05",
//     ".004",
//     ".0004"
// ]
