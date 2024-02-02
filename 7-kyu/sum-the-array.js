"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 * 
 * @returns {number}
 */
Array.prototype.sum = function () {
    return this.reduce((sum, currentNum) => sum + currentNum, 0);
};
