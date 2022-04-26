"use strict";

/**
 * Choose any two adjacent positions in the string,
 * if one of them is 0 and the other one is 1, 
 * remove these two digits from the string.
 * 
 * solution 1 -- regex
 * time: O(n)
 * space: O(n)
 * 
 * @param {string} str 
 * @returns {number} len of the smallest str after applying operation multiple times
 */
function zeroAndOne(str) {
    return str
            .replace(/(01|10)/g, "")
            .length;
}

console.log( zeroAndOne("01010") ); // 1
console.log( zeroAndOne("11101111") ); // 6
console.log( zeroAndOne("110100") ); // 2
