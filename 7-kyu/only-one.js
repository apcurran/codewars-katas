"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 * 
 * @param  {...boolean} args 
 * @returns {boolean} return true if and only if one of them is true while others are false
 */
function onlyOne(...args) {
    if (args.length === 0) return false;

    let seenBooleans = new Set();

    for (let bool of args) {
        if (bool === true) {
            if (seenBooleans.has(true)) {
                return false;
            } else {
                seenBooleans.add(true);
            }
        }
    }

    return seenBooleans.size === 1;
}

console.log(onlyOne()); // false
console.log(onlyOne(true, false, false)); // true
console.log(onlyOne(true, false, false, true)); // false
console.log(onlyOne(false, false, false, false)); // false
