"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 * 
 * @param {string[]} arr - array of faces
 * @returns {number} total amt of smiley faces
 */
function countSmileys(arr) {
    let smileyCount = 0;

    for (let face of arr) {
        // check if eyes are true
        const eyes = face[0];
        const isValidEyes = eyes === ":" || eyes === ";";

        if (!isValidEyes) continue;
        // check if nose is true
        const nose = face.length === 3 ? face[1] : null;

        if (nose !== null) {
            const isValidNose = nose === "-" || nose === "~";

            if (!isValidNose) continue;
        }
        // check if mouth is true
        const mouth = face.length === 3 ? face[2] : face[1];
        const isValidMouth = mouth === ")" || mouth === "D";

        if (!isValidMouth) continue;
        // if all three flags are true, incr smiley counter
        smileyCount++;
    }

    // return total smiley count
    return smileyCount;
}

console.log(countSmileys([":D", ":~)", ";~D", ":)"])); // 4
console.log(countSmileys([":)", ":(", ":D", ":O", ":;"])); // 2
