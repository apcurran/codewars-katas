"use strict";

/**
 * solution 1 -- iterative
 * time: O(n * log n)
 * space: O(n)
 *
 * @param {number} maxBudget
 * @param {number[]} gifts
 * @returns {number}
 */
function howManyGifts(maxBudget, gifts) {
    if (maxBudget <= 0) return 0;

    const lowToHighGiftsArr = [...gifts].sort((a, b) => a - b);

    let giftsCost = 0;
    let giftsCount = 0;

    for (let gift of lowToHighGiftsArr) {
        giftsCost += gift;

        if (giftsCost > maxBudget) break;

        giftsCount++;
    }

    return giftsCount;
}

console.log(howManyGifts(20, [13, 2, 4, 6, 1])); // 4
console.log(howManyGifts(0, [1])); // 0
