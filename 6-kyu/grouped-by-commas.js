"use strict";

/**
 * solution 1
 * time: O(n) -- stringify num
 * space: O(n) -- stringify num
 * 
 * @param {number} n 
 * @returns {string}
 */
function groupByCommas(n) {
    const formatter = new Intl.NumberFormat("en-US", {
        style: "decimal",
    });

    return formatter.format(n);
}

console.log(groupByCommas(200000));
