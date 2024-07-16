"use strict";

/**
 * solution 1
 * n = nums between start and end
 * m = digits in each num
 * time: O(n * m)
 * space: O(m)
 * 
 * @param {number} start 
 * @param {number} end 
 * @returns {number[]} frequencies of digits involving all nums from start to end
 */
function paintLetterboxes(start, end) {
    let digitFrequencies = new Map();

    // iterate from start to end
    for (let currentNum = start; currentNum <= end; currentNum++) {
        const currentNumDigitsStr = String(currentNum);
        // iterate all digits within currentNum
        for (let digitStr of currentNumDigitsStr) {
            const digitNum = Number(digitStr);
            const previousDigitCount = digitFrequencies.get(digitNum) || 0;
            // add digit count to total frequencies of digits map
            digitFrequencies.set(digitNum, previousDigitCount + 1);
        }
    }

    let results = [];
    // convert map to flat array
    for (let digit = 0; digit <= 9; digit++) {
        const digitCount = digitFrequencies.get(digit) || 0;
        results.push(digitCount);
    }

    return results;
}

console.log(paintLetterboxes(125, 132));
// [1,9,6,3,0,1,1,1,1,1]
