"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {object} pairs 
 * @returns {string}
 */
function solution(pairs) {
    let keyValStrs = [];

    for (let [key, val] of Object.entries(pairs)) {
        keyValStrs.push(`${key} = ${val}`);
    }

    return keyValStrs.join(",");
}

console.log( solution({a: 1, b: "2"}) ); // "a = 1,b = 2"
