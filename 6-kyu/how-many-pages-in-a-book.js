"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 * 
 * @param {number} summary 
 * @returns {number}
 */
function amountOfPages(summary) {
    let summaryCopy = summary;
    let pagesCounter = 0;

    while (summaryCopy > 0) {
        pagesCounter++;
        const numPages = String(pagesCounter).length;
        summaryCopy -= numPages;
    }

    return pagesCounter;
}

console.log( amountOfPages(25) ); // n = 17
