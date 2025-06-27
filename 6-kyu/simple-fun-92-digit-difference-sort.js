"use strict";

/**
 * solution 1 -- array.sort() custom comparator func
 * n = arr length
 * m = num digits length
 * time: O(n * log n * m)
 * space: O(n + m)
 *
 * @param {number[]} arr
 * @returns {number[]}
 */
function digitDifferenceSort(arr) {
    return arr.sort(function sortDigitDiff(numA, numB) {
        const [numADigitMin, numADigitMax] = getDigitMinAndMax(numA);
        const numADigitsDiff = numADigitMax - numADigitMin;
        const [numBDigitMin, numBDigitMax] = getDigitMinAndMax(numB);
        const numBDigitsDiff = numBDigitMax - numBDigitMin;

        if (numADigitsDiff === numBDigitsDiff) {
            return -1;
        } else {
            return numADigitsDiff - numBDigitsDiff;
        }
    });
}

/**
 * @param {*} num
 * @returns {[number, number]} [min, max]
 */
function getDigitMinAndMax(num) {
    const strNum = String(num);
    let min = Infinity;
    let max = -Infinity;

    for (let strDigit of strNum) {
        const digit = Number(strDigit);
        min = Math.min(min, digit);
        max = Math.max(max, digit);
    }

    return [min, max];
}

console.log(digitDifferenceSort([152, 23, 7, 887, 243])); // [7, 887, 23, 243, 152]
