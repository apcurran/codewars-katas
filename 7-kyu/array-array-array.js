"use strict";

/**
 * solution 1
 * score = n
 * time: O(n)
 * space: O(n)
 * 
 * @param {Array} x 
 * @returns {Array|"Void!"}
 */
function explode(x) {
    const [firstValue, secondValue] = x;
    
    if (typeof firstValue !== "number" && typeof secondValue !== "number") {
        return "Void!";
    }

    let score = 0;

    if (typeof firstValue === "number") {
        score += firstValue;
    }

    if (typeof secondValue === "number") {
        score += secondValue;
    }

    let results = [];

    for (let i = 0; i < score; i++) {
        results.push(x);
    }

    return results;
}

console.log(explode([9, 3]));
// [[9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3]]

console.log(explode(["a", "b"]));
// "Void!"
