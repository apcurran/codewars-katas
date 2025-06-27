"use strict";

/**
 * solution 1 -- iterative
 * time: O(n)
 * space: O(n)
 *
 * @param {string} text
 * @returns {string}
 */
function smile(text) {
    const emoticonChars = new Set([":", ";", "=", "-", "~"]);
    let resStr = "";

    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        const prevChar = text[i - 1];

        if (!emoticonChars.has(prevChar)) {
            resStr += char;

            continue;
        }

        if (char === "(") {
            resStr += ")";
        } else if (char === "[") {
            resStr += "]";
        } else {
            resStr += char;
        }
    }

    return resStr;
}

console.log(smile("Howdy :(")); // "Howdy :)"
console.log(smile("Never be sad =[")); // "Never be sad =]"
console.log(smile("Change this `=(` and this `:[`")); // "Change this `=)` and this `:]`"
console.log(smile("The list of positive numbers is [1,2,3,4...]")); // "The list of positive numbers is [1,2,3,4...]"
