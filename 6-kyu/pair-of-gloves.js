"use strict";

function numberOfPairs(gloves) {
    let myGloveMap = new Map();
    let glovePairCount = 0;

    for (let gloveClr of gloves) {
        if (!myGloveMap.has(gloveClr)) {
            // Add glove clr with val of 1
            myGloveMap.set(gloveClr, 1);
        } else {
            // Incr glove clr val by 1
            const currGloveClrVal = myGloveMap.get(gloveClr);
            myGloveMap.set(gloveClr, currGloveClrVal + 1);
        }
    }

    for (let [key, val] of myGloveMap) {
        const numOfPairs = Math.floor(val / 2);
        glovePairCount += numOfPairs;
    }

    return glovePairCount;
}

console.log( numberOfPairs(["red", "green", "red", "blue", "blue"]) ); // 2
console.log( numberOfPairs(["red", "red", "red", "red", "red", "red"]) ); // 3
