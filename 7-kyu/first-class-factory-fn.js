"use strict";

/**
 * time: O(1)
 * space: O(1)
 * 
 * @param {number} x 
 * @returns {function}
 */
function factory(x) {
    /**
     * time: O(n)
     * space: O(n)
     * 
     * @param {number[]} numsArr
     * @returns {number[]}
     */
    return (numsArr) => {
        return numsArr.map((num) => num * x);
    };
}
