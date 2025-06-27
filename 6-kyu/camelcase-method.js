"use strict";

/**
 * solution 1
 * time: O(n * m)
 * space: O(n + m)
 * 
 * @returns {string}
 */
String.prototype.camelCase = function () {
    if (this == "") {
        return "";
    } else {
        return this
            .trim()
            .split(" ")
            .map((word) => word[0].toUpperCase() + word.slice(1))
            .join("");
    }
};

console.log( "hello case".camelCase() ); // "HelloCase"
console.log( " camel case word".camelCase() ); // "CamelCaseWord"
console.log( "".camelCase() ); // ""
