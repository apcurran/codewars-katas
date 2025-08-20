"use strict";

/**
 * maximize profit (or minimize loss)
 * solution 1 -- correct, but TLE
 * time: O(n^2)
 * space: O(1)
 *
 * @param {number[]} prices
 * @returns {number}
 */
function maxProfit(prices) {
    let bestResult = -Infinity;

    for (let i = 0; i < prices.length; i++) {
        const first = prices[i];

        for (let j = i + 1; j < prices.length; j++) {
            const second = prices[j];
            const currentDiff = second - first;
            bestResult = Math.max(bestResult, currentDiff);
        }
    }

    return bestResult;
}

console.log(maxProfit([3, 10, 8, 4])); // 7
