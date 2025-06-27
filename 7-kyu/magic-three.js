"use strict";

/**
 * solution 1 -- brute force
 * time: O(n^3)
 * space: O(1)
 * 
 * @param {number[]} arr 
 * @returns {boolean}
 */
function isMagicThree(arr) {
    let canSum = false;

    for (let i = 0; i < arr.length; i++) {
        const a = arr[i];

        for (let j = 0; j < arr.length; j++) {
            const b = arr[j];

            for (let k = 0; k < arr.length; k++) {
                const c = arr[k];
                const sum = a + b + c;

                if (sum === 0) {
                    canSum = true;
                }
            }
        }
    }

    return canSum;
}

console.log(isMagicThree([-10, 4, 5, 7, 3])); // true
console.log(isMagicThree([0])); // true
console.log(isMagicThree([1, 4, 2, -9])); // false
