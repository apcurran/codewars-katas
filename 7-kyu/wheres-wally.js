"use strict";

/**
 * solution 1 -- regex
 * time: O(n)
 * space: O(1)
 * 
 * @param {string} str 
 * @returns {number} index of first occurrence or -1
 */
function wheresWally(str) {
    const regex = /(?<!\S)Wally\b/;

    return str.search(regex);
}

console.log(wheresWally("")); // -1
console.log(wheresWally("DWally")); // -1
console.log(wheresWally(".Wally")); // -1
console.log(wheresWally("Wally")); // 0
console.log(wheresWally("Where's Wally")); // 8
console.log(wheresWally("Hi Wally.")); // 3
