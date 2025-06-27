"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 *
 * @param {number[]} arr
 * @returns {number}
 */
function catchSignChange(arr) {
    let isPositive = arr[0] >= 0 ? true : false;
    let signChangeCount = 0;

    for (let num of arr) {
        if (num >= 0) {
            if (isPositive === true) {
                continue;
            }
            // positive
            isPositive = true;
            signChangeCount++;
        } else {
            // negative
            if (isPositive === false) {
                continue;
            }

            isPositive = false;
            signChangeCount++;
        }
    }

    return signChangeCount;
}

console.log(catchSignChange([1, -3, -4, 0, 5])); // 2
console.log(catchSignChange([1, 3, 4, 5])); // 0
console.log(catchSignChange([-47, 84, -30, -11, -5, 74, 77])); // 3
