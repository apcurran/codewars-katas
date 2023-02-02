"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {string} str 
 * @returns {string}
 */
function covfefe(str) {
    const strHasCoverage = str.includes("coverage");

    if (!strHasCoverage) return `${str} covfefe`;

    return str.replace(/coverage/gi, "covfefe");
}

console.log( covfefe("coverage coverage") ); // "covfefe covfefe"
console.log( covfefe("nothing") ); // "nothing covfefe"
