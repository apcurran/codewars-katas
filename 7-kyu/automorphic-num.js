"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {number} n 
 * @returns {"Automorphic"|"Not!!"}
 */
function automorphic(n) {
    const strNum = String(n);
    const strSquaredNum = String(n ** 2);
    const numEnding = strSquaredNum.slice(-strNum.length);

    return numEnding === strNum ? "Automorphic" : "Not!!";
}

console.log( automorphic(25) ); // "Automorphic"
console.log( automorphic(9) ); // "Not!!"
