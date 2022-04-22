"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {string[]} words 
 * @returns {string}
 */
function sentencify(words) {
    const revisedFirstWord = words[0][0].toUpperCase() + words[0].slice(1);

    if (words.length === 1) return `${revisedFirstWord}.`;

    const proceedingFirstWordStr = words.slice(1).join(" ");
    
    return `${revisedFirstWord} ${proceedingFirstWordStr}.`;
}

console.log( sentencify(["yes"]) ); // "Yes."
console.log( sentencify(["i'm", "afraid", "I", "can't", "let", "you", "do", "that"]) ); // "I'm afraid I can't let you do that."
