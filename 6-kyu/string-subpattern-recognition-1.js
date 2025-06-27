"use strict";

/**
 * solution 1
 * n = str length
 * m = subPattern length
 * time: O(n)
 * space: O(n)
 *
 * @param {string} str
 * @returns {boolean}
 */
function hasSubpattern(str) {
    for (let i = 1; i <= str.length / 2; i++) {
        if (str.length % i !== 0) continue;

        // otherwise, check
        const subPattern = str.slice(0, i);
        const repeatedPattern = subPattern.repeat(str.length / i);

        if (repeatedPattern === str) return true;
    }

    return false;
}

console.log(hasSubpattern("a")); // false //no repeated pattern
console.log(hasSubpattern("aaaa")); // true //created repeating "a"
console.log(hasSubpattern("abcd")); // false //no repeated pattern
console.log(hasSubpattern("abababab")); // true //created repeating "ab"
console.log(hasSubpattern("ababababa")); // false //cannot be entirely reproduced repeating a pattern
