"use strict";

/**
 * solution 1
 * time: O(n * log n)
 * space: O(n)
 * 
 * @param {string} str 
 * @returns {string[]}
 */
function last(str) {
    return str
            .split(" ")
            .sort((wordA, wordB) => {
                const wordALastLetter = wordA[wordA.length - 1];
                const wordBLastLetter = wordB[wordB.length - 1];
                
                if (wordALastLetter < wordBLastLetter) return -1;

                if (wordALastLetter > wordBLastLetter) return 1;

                // equal letters
                return 0;
            });
}

console.log( last("man i need a taxi up to ubud") ); // ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']
