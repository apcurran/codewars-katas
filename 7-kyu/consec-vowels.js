"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 * 
 * @param {string} word 
 * @returns {number}
 */
function getTheVowels(word) {
    // look for next vowel needed
    const vowelsMap = new Map([
        ["a", "e"],
        ["e", "i"],
        ["i", "o"],
        ["o", "u"],
        ["u", "a"],
    ]);
    let vowelCounter = 0;
    // keep track of prev vowel in var
    let prevVowel = "";

    for (let letter of word) {
        if (letter === "a" ||
            letter === "e" ||
            letter === "i" ||
            letter === "o" ||
            letter === "u") {

            // letter is a vowel
            // get necessary next vowel in order
            // fallback vowel is "a" if result is undefined
            const neededVowel = vowelsMap.get(prevVowel) || "a";

            if (neededVowel !== letter) continue;

            // incr vowel count
            vowelCounter++;
            // set prev vowel to curr vowel
            prevVowel = letter;
        }
    }

    return vowelCounter;
}

console.log(getTheVowels("agrtertyfikfmroyrntbvsukldkfa")); // 6
console.log(getTheVowels("erfaiekjudhyfimngukduo")); // 4
