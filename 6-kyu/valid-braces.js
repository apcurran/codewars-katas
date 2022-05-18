"use strict";

/**
 * solution 1 -- stack
 * time: O(n)
 * space: O(n)
 * 
 * @param {string} braces 
 * @returns {boolean}
 */
function validBraces(braces) {
    let bracesStack = [];
    
    for (let brace of braces) {
        const lastStackElem = bracesStack[bracesStack.length - 1];
        const stackIsNotEmpty = bracesStack.length > 0;

        if (brace === "(" || brace === "{" || brace === "[") {
            bracesStack.push(brace);
        } else if (brace === ")" && stackIsNotEmpty && lastStackElem === "(") {
            bracesStack.pop();
        } else if (brace === "}" && stackIsNotEmpty && lastStackElem === "{") {
            bracesStack.pop();
        } else if (brace === "]" && stackIsNotEmpty && lastStackElem === "[") {
            bracesStack.pop();
        } else {
            // not matching closing brace
            return false;
        }
    }

    return bracesStack.length === 0;
}

console.log( validBraces("(){}[]") ); // true
console.log( validBraces("([{}])") ); // true
console.log( validBraces("(}") ); // false
console.log( validBraces("()))") ); // false
