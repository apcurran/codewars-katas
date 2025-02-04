"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 * 
 * @param {string} string 
 * @returns {number} str length
 */
function getRealLength(string) {
    let length = 0;

    for (let char of string) {
        length++;
    }

    return length;
}

console.log(getRealLength(("abcd"))); // 4
console.log(getRealLength(("中国"))); // 2
console.log(getRealLength(("𝓪𝓫𝓬𝓭"))); // 4
console.log(getRealLength(("𨭎𩷶"))); // 2
console.log(getRealLength(("😸🦌🚀"))); // 3
