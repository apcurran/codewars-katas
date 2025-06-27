"use strict";

/**
 * solution 1
 * n = integerList len
 * m = valuesList len
 * time: O(n * m)
 * space: O(n)
 *
 * @param {number[]} integerList
 * @param {number[]} valuesList
 * @returns {number[]}
 */
Array.prototype.remove_ = function (integerList, valuesList) {
    return integerList.filter((num) => !valuesList.includes(num));
};
