/**
 * solution 1 -- hash map
 * time: O(n)
 * space: O(n)
 *
 * @param {string} str
 * @returns {string} first letter appearing only once
 */
function noRepeat(str) {
    let seenLetters = new Map();

    for (let char of str) {
        const previousCharCount = seenLetters.get(char) || 0;
        seenLetters.set(char, previousCharCount + 1);
    }

    for (let [char, charCount] of seenLetters) {
        if (charCount === 1) {
            return char;
        }
    }

    return "";
}

console.log(noRepeat("aabbccdde")); // "e"
console.log(noRepeat("wxyz")); // "w"
console.log(noRepeat("testing")); // "e"
console.log(noRepeat("ssnnffaaxxwwccbbmmvlliibooddzzuuzzssggvvllddhmmnnrrpnneecrrrignnssrreiiuu")); // "h"
