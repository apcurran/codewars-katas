"use strict";

/**
 * solution 1 -- hashmap
 * n = str1 length
 * m = str2 length
 * x = highest frequency count digit of str2
 * time: O(m * x)
 * space: O(n + m) -- not including results array
 *
 * @param {string} str1
 * @param {string} str2
 * @returns {string}
 */
function findAdded(str1, str2) {
    let str1Map = new Map();

    for (let digitStr of str1) {
        const previousCount = str1Map.get(digitStr) || 0;
        str1Map.set(digitStr, previousCount + 1);
    }

    let str2Map = new Map();

    for (let digitStr of str2) {
        const previousCount = str2Map.get(digitStr) || 0;
        str2Map.set(digitStr, previousCount + 1);
    }

    let results = [];

    for (let [digitStr, digitStr2Count] of str2Map) {
        // check numstr freq of str2 and if greater than or not in str1 add to results
        const digitStr1Count = str1Map.get(digitStr) || 0;
        const digitStrDifference = digitStr2Count - digitStr1Count;

        if (digitStrDifference > 0) {
            // add to results for each count
            for (let i = 0; i < digitStrDifference; i++) {
                results.push(digitStr);
            }
        }
    }

    return results.sort().join("");
}

console.log(findAdded("4455446", "447555446666")); // '56667'
