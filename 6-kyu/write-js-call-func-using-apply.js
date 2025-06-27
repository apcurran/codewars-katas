"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {this} thisArg 
 * @param  {...any} args 
 * @returns {function}
 */
Function.prototype.call = function (thisArg, ...args) {
    return this.apply(thisArg, args);
};
