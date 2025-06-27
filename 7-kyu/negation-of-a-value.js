"use strict";

/**
 * solution 1
 * time: O(1)
 * space: O(1)
 *
 * @param {string} string
 * @param {any} value
 * @returns {boolean}
 */
function negationValue(string, value) {
    return string.length % 2 === 0 ? !!value : !value;
}

console.log(negationValue("!", false)); //=> true
console.log(negationValue("!!!!!", true)); //=> false
console.log(negationValue("!!", [])); //=> true
