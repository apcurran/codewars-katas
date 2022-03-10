"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {string} str 
 * @returns {string}
 */
function camelize(str) {
    if (str === "") return "";

    return str
            .match(/[a-z0-9]+/gi)
            .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
            .join("");
}

console.log( camelize("example name") ); // "ExampleName"
console.log( camelize("your-NaMe-here") ); // "YourNameHere"
console.log( camelize("testing ABC") ); // "TestingAbc"
