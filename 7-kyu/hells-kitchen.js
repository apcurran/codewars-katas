"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {string} str 
 * @returns {string}
 */
function gordon(str){
    return str
        .toUpperCase()
        .replace(/[AEIOU]/g, (letter) => letter === "A" ? "@" : "*")
        .split(" ")
        .map((word) => `${word}!!!!`)
        .join(" ");
}

console.log( gordon("i am a chef") ); // '*!!!! @M!!!! @!!!! CH*F!!!!'
