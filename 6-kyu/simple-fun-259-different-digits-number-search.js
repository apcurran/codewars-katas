"use strict";

/**
 * solution 1 -- hashset
 * n = arr length
 * m = num length
 * time: O(n * m)
 * space: O(m)
 *
 * @param {number[]} arr
 * @returns {number}
 */
function differentDigitsNumberSearch(arr) {
    let result = -1;

    arrLoop: for (let num of arr) {
        const uniqueDigits = new Set();

        for (let digitStr of String(num)) {
            if (uniqueDigits.has(digitStr)) {
                // duplicate digit found, go to next num in arr
                continue arrLoop;
            }

            uniqueDigits.add(digitStr);
        }

        // all num digits are unique, so update result
        result = num;
        // exit loop
        break;
    }

    return result;
}

console.log(differentDigitsNumberSearch([22, 111, 101, 124, 33, 30])); // 124
console.log(differentDigitsNumberSearch([1111, 404])); // -1
