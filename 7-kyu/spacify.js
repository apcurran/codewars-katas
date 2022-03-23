"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {string} str 
 * @returns {string}
 */
function spacify(str) {
    return str
            .split("")
            .join(" ");
}

console.log( spacify("hello world") ); // "h e l l o   w o r l d"
