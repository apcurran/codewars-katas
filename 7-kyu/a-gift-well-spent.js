"use strict";

/**
 * solution 1
 * time: O(n^2)
 * space: O(1)
 * 
 * @param {number} giftCardBalance 
 * @param {number[]} items 
 * @returns {number[]|null}
 */
function buy(giftCardBalance, items) {
    for (let i = 0; i < items.length; i++) {
        const firstItem = items[i];

        for (let j = i + 1; j < items.length; j++) {
            const secondItem = items[j];
            const sum = firstItem + secondItem;

            if (sum === giftCardBalance) {
                return [i, j];
            }
        }
    }

    return null;
}

console.log( buy(5, [5, 2, 3, 4, 5]) ); // [1, 2]
console.log( buy(5, [1, 1]) ); // null
