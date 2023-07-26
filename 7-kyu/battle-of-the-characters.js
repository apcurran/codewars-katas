"use strict";

/**
 * solution 1
 * time: O(x + y)
 * space: O(1)
 * 
 * @param {string} x 
 * @param {string} y 
 * @returns {string}
 */
function battle(x, y) {
    let xStrPower = 0;

    for (let char of x) {
        const charPower = char.charCodeAt(0) - 64;
        xStrPower += charPower;
    }
    
    let yStrPower = 0;

    for (let char of y) {
        const charPower = char.charCodeAt(0) - 64;
        yStrPower += charPower;
    }

    if (xStrPower > yStrPower) {
        return x;
    } else if (yStrPower > xStrPower) {
        return y;
    } else {
        return "Tie!";
    }
}

console.log(battle("ONE", "TWO")); // "TWO"
console.log(battle("ONE", "NEO")); // "Tie!"
