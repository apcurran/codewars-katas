"use strict";

/**
 * solution 1
 * time: O(n + m)
 * space: O(n + m)
 *
 * @param {string} str1
 * @param {string} str2
 * @returns {boolean}
 */
function scramble(str1, str2) {
    // cache chars and freqs for str1 and str2
    let str1CharsMap = new Map();
    let str2CharsMap = new Map();

    for (let char of str1) {
        const prevFreq = str1CharsMap.get(char) || 0;
        str1CharsMap.set(char, prevFreq + 1);
    }

    for (let char of str2) {
        const prevFreq = str2CharsMap.get(char) || 0;
        str2CharsMap.set(char, prevFreq + 1);
    }

    // iterate through cache map for str2 checking if the same char and AT LEAST the same freq exists for each char
    for (let [char] of str2CharsMap) {
        const str2CharFreq = str2CharsMap.get(char);
        const str1CharFreq = str1CharsMap.get(char) || 0;

        if (str1CharFreq < str2CharFreq) return false;
    }

    return true;
}

console.log(scramble("rkqodlw", "world")); // true
console.log(scramble("cedewaraaossoqqyt", "codewars")); // true
console.log(scramble("katas", "steak")); // false
