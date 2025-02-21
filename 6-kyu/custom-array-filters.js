"use strict";

Array.prototype.onlyInts = function() {
    return this.filter((value) => Number.isInteger(value));
};

Array.prototype.even = function() {
    return this.onlyInts().filter((num) => num % 2 === 0);
};

Array.prototype.odd = function() {
    return this.onlyInts().filter((num) => num % 2 !== 0);
};

/**
 * @param {number} maxNum 
 * @returns {number[]}
 */
Array.prototype.under = function(maxNum) {
    return this.onlyInts().filter((num) => num < maxNum);
};

/**
 * @param {number} minNum 
 * @returns {number[]}
 */
Array.prototype.over = function(minNum) {
    return this.onlyInts().filter((num) => num > minNum);
};

/**
 * @param {number} start inclusive
 * @param {number} end inclusive
 * @returns {number[]}
 */
Array.prototype.inRange = function(start, end) {
    return this.onlyInts().filter((num) => num >= start && num <= end);
};
