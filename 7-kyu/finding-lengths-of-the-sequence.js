"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 * 
 * @param {number[]} arr 
 * @param {number} specialNum 
 * @returns {number}
 */
function lengthOfSequence(arr, specialNum) {
    let specialNumFrequency = 0;

    for (let num of arr) {
        if (num === specialNum) {
            specialNumFrequency++;
        }
    }

    if (specialNumFrequency < 2 || specialNumFrequency > 2) {
        // edge cases
        return 0;
    }

    const firstIndex = arr.indexOf(specialNum);
    const lastIndex = arr.lastIndexOf(specialNum);

    return lastIndex - firstIndex + 1;
}

console.log(lengthOfSequence([0, -3, 7, 4, 0, 3, 7, 9], 7)); // 5
