"use strict";

/**
 * solution 1 -- closure
 * time: O(1)
 * space: O(1)
 *
 * @param {function} fn
 * @returns {function}
 */
function once(fn) {
    let counter = 0;

    return (...args) => {
        counter++;

        if (counter > 1) return undefined;

        return fn(...args);
    };
}

const justLogOnce = once(console.log);
justLogOnce("mustard");
justLogOnce("ketchup");
