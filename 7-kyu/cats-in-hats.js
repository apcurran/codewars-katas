"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 *
 * @param {number} n
 * @returns {string}
 */
function height(n) {
    let catInTheHatHeight = 2000000;
    let totalHeight = 2000000;

    for (let i = 1; i <= n; i++) {
        const currentHatCatHeight = catInTheHatHeight / 2.5;
        catInTheHatHeight = currentHatCatHeight;
        totalHeight += currentHatCatHeight;
    }

    return totalHeight.toFixed(3);
}

console.log(height(7)); // "3331148.800"
console.log(height(0)); // "2000000.000"
