"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @returns {string}
 */
String.prototype.reverse = function () {
    const str = this;
    let reversedStr = "";

    for (let i = str.length - 1; i >= 0; i--) {
        const char = str[i];
        reversedStr += char;
    }

    return reversedStr;
};

const greeting = "Hello, World!";
console.log(greeting.reverse()); // '!dlroW ,olleH'
