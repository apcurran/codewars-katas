"use strict";

/**
 * solution 1
 * n = total object keys
 * m = key (char) count
 * x = str length
 * time: O(x * (n * m))
 * space: O(x)
 *
 * @param {string} str
 * @param {object} what
 * @returns {string}
 */
function remove(str, what) {
    let result = str;
    // iterate what obj
    for (let char in what) {
        const charCount = what[char];
        // for each key, replace str char with "" x num of times
        for (let i = 0; i < charCount; i++) {
            result = result.replace(char, "");
        }
    }
    // return finished str
    return result;
}

console.log(remove("this is a string", { t: 1, i: 2 })); // 'hs s a string'
console.log(remove("apples and bananas", { a: 50, n: 1 })); // 'pples d bnns'
