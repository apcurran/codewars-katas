"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 * 
 * @param {string} str 
 * @returns {number}
 */
function totalBill(str) {
    const pricePerSushiPlate = 2;
    let sushiPlatesCount = 0;

    for (let dish of str) {
        if (dish === "r") {
            sushiPlatesCount++;
        }
    }

    const freeSushiPlatesCount = Math.floor(sushiPlatesCount / 5);

    return (sushiPlatesCount - freeSushiPlatesCount) * pricePerSushiPlate;
}

console.log(totalBill("rr")); // 4 (2 plates)
console.log(totalBill("rr rrr")); // 8 (5 plates)
