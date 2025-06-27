"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 *
 * @param {string} isbn
 * @returns {string}
 */
function isbnConverter(isbn) {
    const isbnNoLastChar = isbn.slice(0, -1);
    const isbnWithPrefix = "978-" + isbnNoLastChar;
    const isbnRevisedNoDashes = isbnWithPrefix.split("-").join("");

    let revisedDigitsSum = 0;

    for (let i = 0; i < isbnRevisedNoDashes.length; i++) {
        const numChar = Number(isbnRevisedNoDashes[i]);

        if (i % 2 === 0) {
            revisedDigitsSum += numChar;
        } else {
            revisedDigitsSum += numChar * 3;
        }
    }

    const modRevisedDigitsSum = revisedDigitsSum % 10;
    const checkDigit = modRevisedDigitsSum === 0 ? 0 : 10 - modRevisedDigitsSum;

    return isbnWithPrefix + checkDigit;
}

console.log(isbnConverter("1-85326-158-0")); // "978-1-85326-158-9"
