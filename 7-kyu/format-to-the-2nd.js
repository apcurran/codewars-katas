"use strict";

/**
 * solution 1
 * n = args length
 * m = num digits length
 * time: O(n * m)
 * space: O(n)
 *
 * @param  {...any} args
 */
function printNums(...args) {
    let largestNumDigitsCount = 0;

    for (let num of args) {
        // count digits in num
        let currentNumDigitsCount = 0;

        while (num > 0) {
            num = Math.floor(num / 10);
            currentNumDigitsCount++;
        }

        // now we have digits count
        // possible update to max digits num
        largestNumDigitsCount = Math.max(
            largestNumDigitsCount,
            currentNumDigitsCount,
        );
    }

    // max available now
    return args
        .map(function formatNum(num) {
            return String(num).padStart(largestNumDigitsCount, "0");
        })
        .join("\n");
}
