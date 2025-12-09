"use strict";

/**
 * solution 1 -- hashmap
 * time: O(f * s)
 * space: O(s + f)
 *
 * @param {string} string
 * @param {string[]} array
 * @returns {string} feelings count
 */
function countFeelings(string, array) {
    let strCharsMap = new Map();
    let feelingsCount = 0;

    for (let char of string) {
        const previousCharCount = strCharsMap.get(char) || 0;
        strCharsMap.set(char, previousCharCount + 1);
    }

    feelingsLoop: for (let feeling of array) {
        // map for feeling
        let feelingCharsMap = new Map();

        for (let char of feeling) {
            const previousCharCount = feelingCharsMap.get(char) || 0;
            feelingCharsMap.set(char, previousCharCount + 1);
        }

        for (let [char, charCount] of feelingCharsMap) {
            const strChars = strCharsMap.get(char) || 0;

            if (strChars < charCount) {
                continue feelingsLoop;
            }
        }

        // made it here, it works
        feelingsCount++;
    }

    return `${feelingsCount} feeling${feelingsCount === 1 ? "" : "s"}.`;
}

console.log(countFeelings("yliausoenvjw", ["anger", "awe", "joy", "love", "grief"]));
// '3 feelings.'

console.log(countFeelings("griefgriefgrief", ["anger", "awe", "joy", "love", "grief"]));
// '1 feeling.'
