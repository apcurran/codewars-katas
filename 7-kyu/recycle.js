"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 *
 * @param {number[]} recycleItems
 * @returns {[number, number, number]}
 */
function recycleMe(recycleItems) {
    // plastic -> positive
    // glass -> negative
    // cardboard -> zero
    let plasticCount = 0;
    let glassCount = 0;
    let cardboardCount = 0;

    for (let item of recycleItems) {
        if (item > 0) {
            plasticCount++;
        } else if (item < 0) {
            glassCount++;
        } else {
            cardboardCount++;
        }
    }

    return [plasticCount, glassCount, cardboardCount];
}

console.log(recycleMe([5, -9, 0, 6, -84, -95, 15])); // [3,3,1]
