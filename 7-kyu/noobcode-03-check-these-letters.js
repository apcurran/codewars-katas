"use strict";

/**
 * solution 1 -- hashset
 * n = str1 length
 * m = str2 length
 * time: O(n + m)
 * space: O(n)
 *
 * @param {[string, string]} arr
 * @returns {boolean}
 */
function letterCheck([str1, str2]) {
    let str1Chars = new Set(str1.toLowerCase());

    for (let char of str2) {
        if (!str1Chars.has(char.toLowerCase())) {
            return false;
        }
    }

    return true;
}

console.log(letterCheck(["ab", "aaa"])); // true
console.log(letterCheck(["compadres", "DRAPES"])); // true
console.log(letterCheck(["parses", "parsecs"])); // false
