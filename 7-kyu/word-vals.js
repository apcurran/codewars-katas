"use strict";

/**
 * solution 1 -- nested loops
 * n = len of wordsArr
 * m = len of chars in each word
 * time: O(n * m)
 * space: O(n)
 * 
 * @param {string[]} wordsArr 
 * @returns {number[]}
 */
function wordValue(wordsArr) {
    let resArr = [];

    wordsArr.forEach((word, index) => {
        let wordCharsVal = 0;
        // for each word, iterate chars
        for (let char of word) {
            if (char === " ") continue;

            // get charCodeVal and add it to wordValTotal
            const charVal = char.charCodeAt(0) - 96;
            wordCharsVal += charVal;
        }
        
        // with wordValTotal, mult by (index + 1)
        const wordProd = wordCharsVal * (index + 1);
        // add new total val to resArr
        resArr.push(wordProd);
    });

    return resArr;
}

console.log( wordValue(["codewars", "abc", "xyz"]) ); // [88, 12, 225]
