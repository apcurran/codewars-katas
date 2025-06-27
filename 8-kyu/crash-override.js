"use strict";

/**
 * solution 1
 * time: O(1)
 * space: O(1)
 *
 * @param {string} primaryName
 * @param {string} lastName
 * @returns {string}
 */
function aliasGen(primaryName, lastName) {
    const initialLetterOfFirstName = primaryName[0].toUpperCase();
    const initialLetterOfFirstNameCharCode =
        initialLetterOfFirstName.charCodeAt(0);
    const initialLetterOfLastName = lastName[0].toUpperCase();
    const initialLetterOfLastNameCharCode =
        initialLetterOfLastName.charCodeAt(0);

    const upperCaseLetterCharCodeRangeStart = 65;
    const upperCaseLetterCharCodeRangeEnd = 90;

    if (
        initialLetterOfFirstNameCharCode < upperCaseLetterCharCodeRangeStart ||
        initialLetterOfFirstNameCharCode > upperCaseLetterCharCodeRangeEnd ||
        initialLetterOfLastNameCharCode < upperCaseLetterCharCodeRangeStart ||
        initialLetterOfLastNameCharCode > upperCaseLetterCharCodeRangeEnd
    ) {
        return "Your name must start with a letter from A - Z.";
    }

    const aliasFirstName = firstName[initialLetterOfFirstName];
    const aliasLastName = surname[initialLetterOfLastName];

    return `${aliasFirstName} ${aliasLastName}`;
}

// These two objects are preloaded, you need to use them in your code
var firstName = { A: "Alpha", B: "Beta", C: "Cache", L: "Logic" };
var surname = { A: "Analogue", B: "Bomb", C: "Catalyst" };

console.log(aliasGen("Larry", "Brentwood")); // 'Logic Bomb'
console.log(aliasGen("123abc", "Petrovic")); // 'Your name must start with a letter from A - Z.'
