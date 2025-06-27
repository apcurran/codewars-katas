"use strict";

/**
 * solution 1 -- new Proxy() constructor
 * time: O(1)
 * space: O(1)
 * 
 * @param {number} n 
 * @returns {"Even"|"Odd"}
 */
function target(n) {
    return n % 2 === 0 ? "Even" : "Odd";
}

const handler = {
    get(target, prop) {
        return target(prop);
    },
};

const evenOrOdd = new Proxy(target, handler);
