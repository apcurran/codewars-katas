"use strict";

/**
 * solution 1
 * time: O(1)
 * space: O(1)
 * 
 * @param {number} n 
 * @returns {string}
 */
function caffeineBuzz(n) {
    let result = "";

    if (n % 3 !== 0) {
        return "mocha_missing!";
    }

    if (n % 3 === 0 && n % 4 === 0) {
        result += "Coffee";
    } else if (n % 3 === 0) {
        result += "Java";
    }

    if ((n % 3 === 0 && n % 2 === 0) || (n % 3 === 0 && n % 4 === 0 && n % 2 === 0)) {
        result += "Script";
    }

    return result;
}

console.log(caffeineBuzz(3)); // "Java"
console.log(caffeineBuzz(6)); // "JavaScript"
