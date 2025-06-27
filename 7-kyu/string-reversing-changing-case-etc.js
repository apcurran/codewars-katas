"use strict";

/**
 * solution 1
 * s1 = n
 * s2 = m
 * time: O(n + m)
 * space: O(n + m)
 *
 * @param {string} s1
 * @param {string} s2
 * @returns {string}
 */
function reverseAndMirror(s1, s2) {
    const SEPARATOR = "@@@";
    const reversedInvertedStr2 = reverseInvertStr(s2);
    const reversedInvertedStr1 = reverseInvertStr(s1);
    const mirroredStr1 = reversedInvertedStr1.split("").reverse().join("");

    return `${reversedInvertedStr2}${SEPARATOR}${reversedInvertedStr1}${mirroredStr1}`;
}

/**
 * @param {string} str
 * @returns {string}
 */
function reverseInvertStr(str) {
    let reversedInvertedStr = "";

    for (let i = str.length - 1; i >= 0; i--) {
        const char = str[i];

        if (char === char.toLowerCase()) {
            // replace with uppercase
            reversedInvertedStr += char.toUpperCase();
        } else {
            // replace with lowercase
            reversedInvertedStr += char.toLowerCase();
        }
    }

    return reversedInvertedStr;
}

console.log(reverseAndMirror("FizZ", "buZZ")); // "zzUB@@@zZIffIZz"
