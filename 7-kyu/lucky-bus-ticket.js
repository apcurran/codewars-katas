"use strict";

/**
 * solution 1
 * time: O(1) -- st length 6
 * space: O(1) -- str length 6
 *
 * @param {string} ticket
 * @returns {boolean}
 */
function isLucky(ticket) {
    // ticket must be 6 digits long
    if (ticket.length !== 6) return false;

    // must not include letters
    if (ticket.match(/[a-z]/g)) return false;

    const firstThreeDigitsSum =
        Number(ticket[0]) + Number(ticket[1]) + Number(ticket[2]);
    const lastThreeDigitsSum =
        Number(ticket[3]) + Number(ticket[4]) + Number(ticket[5]);

    return firstThreeDigitsSum === lastThreeDigitsSum;
}

console.log(isLucky("123321")); // true
console.log(isLucky("12a21a")); // false
