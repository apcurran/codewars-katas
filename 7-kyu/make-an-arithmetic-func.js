"use strict";

/**
 * solution 1
 * time: O(1)
 * space: O(1)
 *
 * @param {number} a
 * @param {number} b
 * @param {string} operator
 * @returns {number}
 */
function arithmetic(a, b, operator) {
    switch (operator) {
        case "add":
            return a + b;
        case "subtract":
            return a - b;
        case "multiply":
            return a * b;
        case "divide":
            return a / b;
    }
}

console.log(arithmetic(5, 2, "add")); // 7
