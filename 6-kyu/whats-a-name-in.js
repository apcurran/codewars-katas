"use strict";

/**
 * solution 1 -- pointer technique
 * time: O(n + m) -- name copies
 * space: O(n + m) -- str and name copies with lowercasing func
 *
 * @param {string} str
 * @param {string} name
 * @returns {boolean}
 */
function nameInStr(str, name) {
    const lowerStr = str.toLowerCase();
    const lowerName = name.toLowerCase();
    // pointer technique for name str
    let nameCharPointer = 0;

    for (let strChar of lowerStr) {
        if (strChar === lowerName[nameCharPointer]) {
            nameCharPointer++;
        }
    }

    return nameCharPointer === name.length;
}

console.log(nameInStr("Across the rivers", "chris")); // true
