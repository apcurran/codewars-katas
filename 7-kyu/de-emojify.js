"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {string} emojiString 
 * @returns {string}
 */
function deEmojify(emojiString) {
    if (!emojiString) return "";

    const emojiHash = {
        ":)": 0,
        ":D": 1,
        ">(": 2,
        ">:C": 3,
        ":/": 4,
        ":|": 5,
        ":O": 6,
        ";)": 7,
        "^.^": 8,
        ":(": 9,
    };

    const parts = emojiString.split("  ");
    let results = "";

    for (let part of parts) {
        const asciiCodeStr = part
            .split(" ")
            .map((emoji) => emojiHash[emoji])
            .join("");
        const char = String.fromCharCode(Number(asciiCodeStr));
        results += char;
    }

    return results;
}

console.log(deEmojify(":D :) :/  :D :) :|")); // "hi"
