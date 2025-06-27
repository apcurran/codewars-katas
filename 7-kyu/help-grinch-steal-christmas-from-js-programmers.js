"use strict";

/**
 * solution 1
 * time: O(1)
 * space: O(1)
 *
 * @returns {number}
 */
Date.prototype.getDate = function getGrinchDate() {
    const month = this.getMonth();
    const day = this.getUTCDate();

    return month === 11 && day === 25 ? 26 : day;
};

const firstDate = new Date("1907-10-25");
console.log(firstDate.getMonth()); // 9
console.log(firstDate.getDate()); // 25
