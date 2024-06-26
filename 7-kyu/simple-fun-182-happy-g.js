"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 * 
 * @param {string} str 
 * @returns {boolean}
 */
function gHappy(str) {
    for (let i = 0; i < str.length; i++) {
        const previousChar = str[i - 1];
        const currentChar = str[i];
        const nextChar = str[i + 1];

        if (currentChar === "g" && previousChar !== "g" && nextChar !== "g") {
            return false;
        }
    }

    return true;
}

console.log(gHappy("")); // true
console.log(gHappy("gg0gg3gg0gg")); // true
console.log(gHappy("gog")); // false
console.log(gHappy("ggg ggg g ggg")); // false
console.log(gHappy("A half of a half is a quarter.")); // true
console.log(gHappy("good grief")); // false
console.log(gHappy("bigger is ggooder")); // true
console.log(gHappy("gggggggggg")); // true
