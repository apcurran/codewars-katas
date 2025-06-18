"use strict";

// /**
//  * solution 1 -- regex
//  * time: O(n)
//  * space: O(1)
//  * 
//  * @param {string} str 
//  * @param {number} position 
//  * @returns {boolean}
//  */
// function checkVowel(str, position) {
//     if (position > str.length - 1 || position < 0) {
//         return false;
//     }

//     const isVowel = /[aeiou]/i;

//     return isVowel.test(str[position]);
// }

/**
 * solution 2 -- string.includes() prototype method
 * time: O(n)
 * space: O(1)
 * 
 * @param {string} str 
 * @param {number} position 
 * @returns {boolean}
 */
function checkVowel(str, position) {
    return "aeiouAEIOU".includes(str[position]);
}

console.log(checkVowel("cat", 1)); // true
console.log(checkVowel("cat", 0)); // false
console.log(checkVowel("cat", 4)); // false
