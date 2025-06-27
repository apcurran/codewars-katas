"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {string} str 
 * @param {number[]} arr 
 * @returns {string}
 */
function scramble(str, arr) {
    // break str into array of chars
    let chars = [];
    // iterate arr
    for (let i = 0; i < arr.length; i++) {
        const charIndex = arr[i];
        const strChar = str[i];
        // for each index, modify the array char
        chars[charIndex] = strChar;
    }
    // return finished str
    return chars.join("");
}

console.log(scramble("sc301s", [4, 0, 3, 1, 5, 2])); // "c0s3s1"
console.log(scramble("bskl5", [2, 1, 4, 3, 0])); // "5sblk"
