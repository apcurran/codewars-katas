"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n) -- including results array
 * 
 * @param {number} n 
 * @returns {string}
 */
function countArara(n) {
    if (n === 1) return "anane";

    // otherwise, get divisions of 2 as a repeat "adak"
    const adakCount = Math.floor(n / 2);
    let results = [];

    for (let i = 0; i < adakCount; i++) {
        results.push("adak");
    }
    // add an "anane" to odd divisions of 2
    if (n % 2 === 1) {
        results.push("anane");
    }

    return results.join(" ");
}

console.log(countArara(3)); // 'adak anane'
console.log(countArara(8)); // 'adak adak adak adak'
