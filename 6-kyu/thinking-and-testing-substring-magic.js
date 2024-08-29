"use strict";

/**
 * solution 1
 * time: O(i + j)
 * space: O(i + j)
 * 
 * @param {string} str 
 * @param {number} i 
 * @param {number} j 
 * @returns {string}
 */
function testit(str, i, j) {
    return str.slice(i, -1) + str.slice(j, -1);
}

console.log(testit("", 0, 0)); // ''
console.log(testit("a", 0, 0)); // ''
console.log(testit("aa", 0, 0)); // 'aa'
console.log(testit("ab", 0, 0)); // 'aa'
console.log(testit("aaa", 0, 0)); // 'aaaa'
console.log(testit("aaa", 0, 1)); // 'aaa'
console.log(testit("aaa", 1, 1)); // 'aa'
console.log(testit("aaaaa", 1, 1)); // 'aaaaaa'
console.log(testit("aaaaa", 1, 2)); // 'aaaaa'
