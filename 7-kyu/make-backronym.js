"use strict";

//preload variable: dict

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {string} str 
 * @returns {string}
 */
function makeBackronym(str) {
    let resStrArr = [];

    for (let char of str) {
        const charWord = dict[char.toUpperCase()];
        resStrArr.push(charWord);
    }

    return resStrArr.join(" ");
}