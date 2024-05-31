"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {string} x 
 * @returns {string}
 */
function randomCase(x) {
    let result = "";

    for (let char of x) {
        if (char !== " ") {
            const randomChance = Math.random();
        
            if (randomChance < .5) {
                result += char.toLowerCase();
            } else {
                result += char.toUpperCase();
            }
        } else {
            // empty space
            result += char;
        }
    }

    return result;
}

console.log(randomCase("Lorem ipsum dolor sit amet, consectetur adipiscing elit"));
