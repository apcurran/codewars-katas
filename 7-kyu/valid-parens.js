"use strict";

/**
 * solution 1 -- stack
 * time: O(n)
 * space: O(n)
 * 
 * @param {string} parensStr 
 * @returns {boolean}
 */
function validParentheses(parensStr) {
    let parensStack = [];

    for (let paren of parensStr) {
        if (paren === "(") {
            // push on to stack
            parensStack.push(paren);
        } else {
            // pop from stack and compare open to close parens
            const possibleOpeningParen = parensStack.pop();

            if (possibleOpeningParen === undefined) {
                // no matching paren for pair to exist
                return false;
            }
        }
    }

    // check for any remaining "(" open paren
    if (parensStack.length > 0) {
        // leftover open paren "(" without a partner
        return false;
    }

    return true;
}

console.log( validParentheses("()") ); // true
console.log( validParentheses(")(()))") ); // false
console.log( validParentheses("()()(") ); // false
