"use strict";

/**
 * 
 * @param {string} str 
 * @returns {string}
 */
function remove(str) {
    if (!str.includes("!")) return str;

    let exclamationMarksStr = str
                                .match(/!/g)
                                .join("");
    const noMarkStr = str
                    .split("!")
                    .join("");

    return `${noMarkStr}${exclamationMarksStr}`;
}

console.log( remove("Hi! Hi!! Hi!") ); // "Hi Hi Hi!!!!"