"use strict";

/**
 * solution 1 -- iterative
 * time: O(n^2)
 * space: O(n)
 * 
 * @param {string[]} strArr 
 * @param {number} k 
 * @returns {string}
 */
function longestConsec(strArr, k) {
    const n = strArr.length;

    if (n === 0 || k > n || k <= 0) return "";

    let longestStr = "";

    for (let i = 0; i < n; i++) {
        const consecStrs = strArr.slice(i, i + k);
        const concatStr = consecStrs.join("");

        if (concatStr.length > longestStr.length) {
            longestStr = concatStr;
        }
    }

    return longestStr;
}

console.log( longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2) ); // "abigailtheta"
console.log( longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1) ); // "oocccffuucccjjjkkkjyyyeehh"
