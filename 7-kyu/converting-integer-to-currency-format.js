"use strict";

/**
 * solution 1 -- Intl formatter
 * time: O(n) - including result
 * space: O(n) - including result
 *
 * @param {number} price
 * @returns {string} formatted with commas as a currency str
 */
function toCurrency(price) {
    const formatter = new Intl.NumberFormat("en-US", {
        maximumFractionDigits: 0,
        useGrouping: true,
    });

    return formatter.format(price);
}

console.log(toCurrency(123456)); // "123,456"
