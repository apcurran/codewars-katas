"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 * 
 * @param {number} candlesTotal 
 * @param {string} debris
 * @returns {string}
 */
function cake(candlesTotal, debris) {
    const FIRE_PERCENTAGE = 0.7;
    let debrisSum = 0;

    for (let i = 0; i < debris.length; i++) {
        const currentChar = debris[i];
        const charAsciiCode = currentChar.charCodeAt(0);

        if (i % 2 === 0) {
            debrisSum += charAsciiCode;
        } else {
            const oneIndexedNum = charAsciiCode - 96;
            debrisSum += oneIndexedNum;
        }
    }

    const willCarpetCatchFire = debrisSum > (candlesTotal * FIRE_PERCENTAGE);

    if (willCarpetCatchFire) {
        return "Fire!";
    } else {
        return "That was close!";
    }
}

console.log(cake(900, "abcdef")); // 'That was close!'
console.log(cake(56, "ifkhchlhfd")); // 'Fire!'
