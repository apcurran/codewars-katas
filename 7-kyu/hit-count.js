"use strict";

/**
 * solution 1
 * n = hitCount length
 * m = digits from 0 to digitNum
 * time: O(n * m)
 * space: O(n * m)
 *
 * @param {string} hitCount
 * @returns {number[][]}
 */
function counterEffect(hitCount) {
    let digitIncrements = [];
    // iterate string
    for (let digitStr of hitCount) {
        // coerce string digit into number
        const digitNum = Number(digitStr);
        // create digit array
        let digitValues = [];
        // iterate from 0 to digit
        for (let j = 0; j <= digitNum; j++) {
            // add values to digit array
            digitValues.push(j);
        }
        // add digit array to final results
        digitIncrements.push(digitValues);
    }
    // return final results
    return digitIncrements;
}

console.log(counterEffect("1250"));
// [[0,1],[0,1,2],[0,1,2,3,4,5],[0]]
