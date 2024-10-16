"use strict";

/**
 * solution 1 -- iterative
 * time: O(n)
 * space: O(1)
 * 
 * @param {number} k 
 * @returns {number}
 */
function appleBoxes(k) {
    let oddYellowApples = 1;
    let evenRedApples = 0;

    for (let i = 2; i <= k; i++) {
        const mTotal = i * i;

        if (i % 2 === 1) {
            // odd
            oddYellowApples += mTotal;
        } else {
            evenRedApples += mTotal;
        }
    }

    return evenRedApples - oddYellowApples;
}

console.log(appleBoxes(5)); // -15
console.log(appleBoxes(15)); // -120
