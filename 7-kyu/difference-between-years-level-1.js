"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {string} date1 
 * @param {string} date2 
 * @returns {number}
 */
function howManyYears(date1, date2) {
    const date1Year = date1.split("/")[0];
    const date2Year = date2.split("/")[0];

    return Math.abs(Number(date1Year) - Number(date2Year));
}

console.log(howManyYears("1997/10/10", "2015/10/10")); // 18
