"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 *
 * @param {string[]} words
 * @returns {boolean[]}
 */
function flickSwitch(words) {
    let flickFlag = true;
    let results = [];

    for (let word of words) {
        if (word === "flick") {
            flickFlag = !flickFlag;
        }

        results.push(flickFlag);
    }

    return results;
}

console.log(flickSwitch(["codewars", "flick", "code", "wars"])); // [True, False, False, False]
