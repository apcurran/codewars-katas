"use strict";

/**
 * solution 1 -- custom sort comparator func
 * time: O(n * log n)
 * space: O(n)
 * 
 * @param {string} list 
 * @param {number} n 
 * @returns {string}
 */
function sortIt(list, n) {
    const collator = new Intl.Collator("en");
    let words = list.split(", ");

    return words
        .sort(function sortAlpha(wordA, wordB) {
            const wordACharCodeLower = wordA[n - 1].toLowerCase().charCodeAt(0);
            const wordBCharCodeLower = wordB[n - 1].toLowerCase().charCodeAt(0);

            if (wordACharCodeLower === wordBCharCodeLower) {
                return collator.compare(wordA, wordB);
            } else {
                return wordACharCodeLower - wordBCharCodeLower;
            }
        })
        .join(", ");
}

console.log(sortIt("bid, zag", 2)); // 'zag, bid'
