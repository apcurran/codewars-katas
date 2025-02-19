"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {string} str 
 * @returns {string}
 */
function sayMeOperations(str) {
    const nums = str.split(" ").map(Number);
    let results = [];

    for (let i = 0; i < nums.length - 2; i++) {
        const currentNum = nums[i];
        const nextNum = nums[i + 1];
        const thirdNum = nums[i + 2];

        if (currentNum + nextNum === thirdNum) {
            results.push("addition");
        } else if (currentNum - nextNum === thirdNum) {
            results.push("subtraction");
        } else if (currentNum * nextNum === thirdNum) {
            results.push("multiplication");
        } else {
            results.push("division");
        }
    }

    return results.join(", ");
}

console.log(sayMeOperations("9 4 5 20 25")); // "subtraction, multiplication, addition"
console.log(sayMeOperations("10 2 5 -3 -15 12")); // "division, subtraction, multiplication, subtraction"
