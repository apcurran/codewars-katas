"use strict";

/**
 * solution 1
 * time: O(max(n, m))
 * space: O(max(n, m))
 * 
 * @param {array} arr 
 * @param {function} fn 
 */
Array.prototype.zip = function (arr, fn) {
    let results = [];

    for (let i = 0; i < Math.min(this.length, arr.length); i++) {
        const value = fn(this[i], arr[i]);
        results.push(value);
    }

    return results;
};
