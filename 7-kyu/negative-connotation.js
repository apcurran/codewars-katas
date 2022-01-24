"use strict";

function connotation(str) {
    const wordArr = str.split(/\s+/g);
    let negativeCount = 0;
    let positiveCount = 0;

    for (let word of wordArr) {
        const firstLetter = word[0].toLowerCase();
        const firstLetterCode = firstLetter.charCodeAt(0);

        if (firstLetterCode >= 97 && firstLetterCode <= 109) {
            positiveCount++;
        } else {
            negativeCount++;
        }
    }

    return positiveCount >= negativeCount;
}

// console.log(connotation("A big brown fox caught a bad bunny")); // true
// console.log(connotation("Is  this the  best  Kata?")); // true
// console.log(connotation("Xylophones can obtain Xenon.")); // false
console.log(connotation("All FOoD tAsTEs NIcE for someONe")); // true