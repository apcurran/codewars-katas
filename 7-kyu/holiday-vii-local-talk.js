"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {string} s 
 * @returns {string}
 */
function pak(s) {
    const chars = s.split(" ");
    // if only spaces, return empty string
    if (chars.every((char) => char === "")) {
        return "";
    }

    return chars.join(" pak ");
}

console.log(pak("Man I need a taxi up to Ubud")); // "Man pak I pak need pak a pak taxi pak up pak to pak Ubud"
console.log(pak("   ")); // ""
