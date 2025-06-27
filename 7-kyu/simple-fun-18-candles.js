"use strict";

/**
 * solution 1
 * time: O(log base m of n)
 * space: O(1)
 *
 * @param {number} candlesNumber
 * @param {number} makeNew
 * @returns {number}
 */
function candles(candlesNumber, makeNew) {
    let result = 0;
    let empty = 0;

    while (candlesNumber > 0) {
        result += candlesNumber;
        empty += candlesNumber;
        candlesNumber = Math.floor(empty / makeNew);
        empty = empty % makeNew;
    }

    return result;
}

console.log(candles(5, 2)); // 9
console.log(candles(1, 2)); // 1
console.log(candles(3, 3)); // 4
