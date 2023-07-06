"use strict";

/**
 * solution 1 -- hashset
 * time: O(n)
 * space: O(1)
 * 
 * @param {string} str 
 * @returns {number}
 */
function absentVowel(str){
    const allVowels = "aeiou";
    let seenVowels = new Set();

    for (let char of str) {
        // Set obj doesn't have a current vowel
        if (!seenVowels.has(char) && allVowels.includes(char)) {
            // add vowel
            seenVowels.add(char);
        }
    }

    for (let i = 0; i < allVowels.length; i++) {
        const currentVowel = allVowels[i];

        if (!seenVowels.has(currentVowel)) {
            return i;
        }
    }
}

console.log( absentVowel("John Doe hs seven red pples under his bsket") ); // 0
console.log( absentVowel("Bb Smith sent us six neatly arranged range bicycles") ); // 3
