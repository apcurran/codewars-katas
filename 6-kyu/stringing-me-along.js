"use strict";

/**
 * solution 1 -- closure
 * n = str length
 * time: O(n)
 * space: O(n)
 * 
 * @param {string} str
 * @returns {string}
 */
function createMessage(str) {
    /**
     * @param {string} [phrase] 
     * @returns {string}
     */
    return function passIn(phrase) {
        if (!phrase) {
            return str;
        }

        return createMessage(`${str} ${phrase}`);
    };
}
