"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {string} str 
 * @returns {string}
 */
function sortMyString(str) {
    let strMap = new Map();

    for (let i = 0; i < str.length; i++) {
        const currLetter = str[i];
        strMap.set(i, currLetter);
    }

    let evenStrGroup = "";
    let oddStrGroup = "";

    for (let [index, letter] of strMap) {
        if (index % 2 === 0) {
            evenStrGroup += letter;
        } else {
            oddStrGroup += letter;
        }
    }

    return `${evenStrGroup} ${oddStrGroup}`;
}

console.log( sortMyString("CodeWars") ); // "CdWr oeas"
