"use strict";

/**
 * solution 1
 * time: O(n * log n * m)
 * space: O(n)
 *
 * @param {string} s
 * @returns {string} sorted words by length ASC
 */
function longer(s) {
    return s
        .split(" ")
        .sort((wordA, wordB) => {
            if (wordA.length > wordB.length) {
                return 1;
            } else if (wordA.length < wordB.length) {
                return -1;
            } else {
                // same length
                // sort alpha
                for (let i = 0; i < wordA.length; i++) {
                    const wordACharCode = wordA[i].charCodeAt(0);
                    const wordBCharCode = wordB[i].charCodeAt(0);

                    if (wordACharCode === wordBCharCode) {
                        continue;
                    }

                    return wordACharCode - wordBCharCode;
                }
            }
        })
        .join(" ");
}

console.log(longer("Darkness on the edge of Town")); // "of on the Town edge Darkness"
console.log(longer("Have you ever Seen the Rain")); // the you Have Rain Seen ever
