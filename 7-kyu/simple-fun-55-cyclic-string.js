"use strict";

/**
 * solution 1
 * time: O(n^2)
 * space: O(1)
 * 
 * @param {string} s 
 * @returns {number}
 */
function cyclicString(s) {
    let counter = 1;

    while (!s.startsWith(s.slice(counter))) {
        counter++;
    }

    return counter;
}

console.log(cyclicString("cabca")); // 3
console.log(cyclicString("aba")); // 2
