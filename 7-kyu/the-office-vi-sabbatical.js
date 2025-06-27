"use strict";

/**
 * solution 1 -- hashset
 * time: O(n)
 * space: O(n) -- str.toLowerCase() call
 *
 * @param {string} s
 * @param {number} val
 * @param {number} happiness
 * @returns {string}
 */
function sabb(s, val, happiness) {
    const sabbaticalLetters = new Set("sabbatical");
    const loweredStr = s.toLowerCase();
    let lettersFromSInSabbaticalCount = 0;

    for (let char of loweredStr) {
        if (sabbaticalLetters.has(char)) {
            lettersFromSInSabbaticalCount++;
        }
    }

    const sum = lettersFromSInSabbaticalCount + val + happiness;

    if (sum > 22) {
        return "Sabbatical! Boom!";
    } else {
        return "Back to your desk, boy.";
    }
}

console.log(sabb("Can I have a sabbatical?", 5, 5)); // 'Sabbatical! Boom!'
