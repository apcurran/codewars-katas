"use strict";

/**
 * solution 1 -- regex
 * time: O(n)
 * space: O(n) -- array.match() returns a new array
 * 
 * @param {string} message 
 * @returns {boolean}
 */
function isAValidMessage(message) {
    if (message === "") return true;

    const splitArr = message.match(/\d+|[a-zA-Z]+/gi) || [];
    
    for (let i = 0; i < splitArr.length; i++) {
        const currentElem = Number(splitArr[i]);
        const nextElem = splitArr[i + 1];

        if (!Number.isNaN(currentElem)) {
            if (nextElem === undefined || nextElem.length !== currentElem) {
                return false;
            }
        }
    }

    return true;
}

console.log(isAValidMessage("3hey5hello2hi")); // true
console.log(isAValidMessage("4code13hellocodewars")); // true
console.log(isAValidMessage("3hey5hello2hi5")); // false
