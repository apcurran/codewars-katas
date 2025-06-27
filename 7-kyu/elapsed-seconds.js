"use strict";

/**
 * solution 1
 * time: O(1)
 * space: O(1)
 *
 * @param {Date} startDate
 * @param {Date} endDate
 * @returns {number} elapsed time in seconds
 */
function elapsedSeconds(startDate, endDate) {
    return (endDate.getTime() - startDate.getTime()) / 1000;
}

const start = new Date(2013, 1, 1, 0, 0, 1);
const end = new Date(2013, 1, 1, 0, 0, 20);
console.log(elapsedSeconds(start, end)); // 19
