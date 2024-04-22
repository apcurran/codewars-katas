"use strict";

/**
 * solution 1
 * time: O(n^2)
 * space: O(n^2)
 * 
 * @param {string} stringOne 
 * @param {string} stringTwo 
 * @returns {string}
 */
function mutateMyStrings(stringOne, stringTwo) {
    let strOneChars = [...stringOne];
    let results = [stringOne];

    for (let i = 0; i < strOneChars.length; i++) {
        const currentStrOneChar = strOneChars[i];
        const currentStrTwoChar = stringTwo[i];

        if (currentStrOneChar === currentStrTwoChar) continue;

        strOneChars[i] = currentStrTwoChar;
        results.push(strOneChars.join(""));
    }

    return results.join("\n") + "\n";
}

console.log(mutateMyStrings("bubble gum", "turtle ham"));
// "bubble gum\ntubble gum\nturble gum\nturtle gum\nturtle hum\nturtle ham\n"
