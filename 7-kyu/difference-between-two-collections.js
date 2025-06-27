"use strict";

/**
 * solution 1 -- hashset
 * time: O(a + b)
 * space: O(a + b)
 *
 * @param {string[]} a
 * @param {string[]} b
 * @returns {string[]}
 */
function diff(a, b) {
    const setA = new Set(a);
    const setB = new Set(b);
    let results = [];

    for (let char of setA) {
        if (!setB.has(char)) {
            results.push(char);
        }
    }

    for (let char of setB) {
        if (!setA.has(char)) {
            results.push(char);
        }
    }

    return results.sort();
}

const arrayA = ["a", "a", "t", "e", "f", "i", "j"];
const arrayB = ["t", "g", "g", "i", "k", "f"];
console.log(diff(arrayA, arrayB)); // ["a", "e", "g", "j", "k"]
