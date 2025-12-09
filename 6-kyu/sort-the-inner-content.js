"use strict";

/**
 * solution 1
 * time: O(n^2 * log n)
 * space: O(n^2)
 *
 * @param {string} words
 * @returns {string}
 */
function sortTheInnerContent(words) {
    // break string into separate words
    const wordsArr = words.split(" ");
    let resStrArr = [];
    // iterate through words arr
    for (let word of wordsArr) {
        // separate first and last chars
        const firstChar = word[0];
        const lastChar = word[word.length - 1];
        // sort middle chars in desc order
        const sortedMiddleChars = word
            .slice(1, -1)
            .split("")
            .sort((a, b) => {
                if (a < b) return 1;
                if (a > b) return -1;
            })
            .join("");
        // create a new str with first char, sorted middle chars, and last char
        const sortedWord = firstChar + sortedMiddleChars + lastChar;
        // append sorted word to new str
        resStrArr.push(sortedWord);
    }
    // return new str
    return resStrArr.join(" ");
}

// console.log( sortTheInnerContent("sort the inner content in descending order") ); // "srot the inner ctonnet in dsnnieedcg oredr"
console.log(
    sortTheInnerContent("exxvjie qzrrjdcm vzzsqam pusrqnmiet tmmkgu oqhdm pypphx qxvssledz rr asz"),
); // "exxvjie qzrrjdcm vzzsqam pusrqnmiet tmmkgu oqhdm pypphx qxvssledz r asz"
