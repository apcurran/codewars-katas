"use strict";

/**
 * solution 1
 * time: O(n^2)
 * space: O(n)
 * 
 * @param {string} text 
 * @returns {string[]}
 */
function scrollingText(text) {
    if (text.length === 0) return [];

    let rotatedText = text
                        .toUpperCase()
                        .split("");
    let rotations = [text.toUpperCase()];

    for (let i = 1; i < rotatedText.length; i++) {
        const removedFrontLetter = rotatedText.shift();
        rotatedText.push(removedFrontLetter);
        const currentRotation = rotatedText.join("");
        rotations.push(currentRotation);
    }

    return rotations;
}

console.log( scrollingText("abc") ); // ["ABC","BCA","CAB"]
