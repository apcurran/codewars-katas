"use strict";

/**
 * solution 1
 * time: O(1)
 * space: O(1)
 * 
 * @param {string} day 
 * @param {number} num 
 * @returns {boolean}
 */
function AmIAfraid(day, num) {
    if (day === "Monday" && num === 12) {
        return true;
    } else if (day === "Tuesday" && num > 95) {
        return true;
    } else if (day === "Wednesday" && num === 34) {
        return true;
    } else if (day === "Thursday" && num === 0) {
        return true;
    } else if (day === "Friday" && num % 2 === 0) {
        return true;
    } else if (day === "Saturday" && num === 56) {
        return true;
    } else if (day === "Sunday" && Math.abs(num) === 666) {
        return true;
    } else {
        return false;
    }
}

console.log(AmIAfraid("Monday", 13)); // false
console.log(AmIAfraid("Sunday", -666)); // true
console.log(AmIAfraid("Tuesday", 2)); // false
console.log(AmIAfraid("Tuesday", 965)); // true
console.log(AmIAfraid("Friday", 2)); // true
