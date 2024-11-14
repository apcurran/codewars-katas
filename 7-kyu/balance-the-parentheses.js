"use strict";

/**
 * solution 1 -- iterative
 * time: O(n)
 * space: O(n)
 * 
 * @param {string} str 
 * @returns {string}
 */
function fixParentheses(str) {
    let openParenCount = 0;
    let closingParenCount = 0;
    
    // count unmatched closing parens
    for (let paren of str) {
        if (paren === "(") {
            openParenCount++;
        } else {
            if (openParenCount > 0) {
                openParenCount--;
            } else {
                closingParenCount++;
            }
        }
    }

    const prefix = "(".repeat(closingParenCount);
    const suffix = ")".repeat(openParenCount);

    return prefix + str + suffix;
}

console.log(fixParentheses(")(")); // "()()"
