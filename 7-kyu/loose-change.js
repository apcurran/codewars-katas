"use strict";

const CHANGE = {
    penny: 0.01,
    nickel: 0.05,
    dime: 0.1,
    quarter: 0.25,
    dollar: 1.0,
};

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 *
 * @param {string} change
 * @returns {string}
 */
function changeCount(change) {
    const changeItems = change.split(" ");
    let total = 0;

    for (let changeItem of changeItems) {
        const amount = CHANGE[changeItem];
        total += amount;
    }

    return "$" + total.toFixed(2);
}

console.log(changeCount("dime penny dollar")); // "$1.11"
