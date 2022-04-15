"use strict";

/**
 * solution 1 -- stack
 * time: O(n)
 * space: O(n)
 * 
 * @param {string} parens 
 * @returns {boolean}
 */
function validParentheses(parens) {
    // cannot be true if starting with a closing paren
    if (parens[0] === ")") return false;

    let parenStack = [];

    for (let paren of parens) {
        if (paren === ")") {
            if (parenStack && parenStack[parenStack.length - 1] === "(") {
                parenStack.pop();
            } else {
                return false;
            }
        } else {
            parenStack.push(paren);
        }
    }

    if (parenStack.length === 0) return true;

    return false;
}

console.log( validParentheses("()") ); // true
console.log( validParentheses(")(()))") ); // false
