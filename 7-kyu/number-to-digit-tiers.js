"use strict";

/**
 * solution 1
 * n = strNum length
 * time: O(n^2)
 * space: O(n)
 *
 * @param {number} num
 * @returns {string[]}
 */
function createArrayOfTiers(num) {
    const strNum = String(num);
    let results = [];

    for (let i = 1; i < strNum.length + 1; i++) {
        const chunk = strNum.slice(0, i);
        results.push(chunk);
    }

    return results;
}

console.log(createArrayOfTiers(2017)); // ["2", "20", "201", "2017"]
