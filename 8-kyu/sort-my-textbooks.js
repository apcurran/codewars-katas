"use strict";

/**
 * solution 1
 * time: O(n * log n)
 * space: O(n) -- sort method
 * 
 * @param {string[]} textbooks 
 * @returns {string[]}
 */
function sorter(textbooks) {
    return textbooks.sort(function sortAlphaIgnoreCase(bookA, bookB) {
        const bookALowercase = bookA.toLowerCase();
        const bookBLowercase = bookB.toLowerCase();

        if (bookALowercase < bookBLowercase) {
            return -1;
        } else if (bookALowercase > bookBLowercase) {
            return 1;
        } else {
            return 0;
        }
    });
}

console.log(sorter(["Algebra", "history", "Geometry", "english"]));
// ['Algebra', 'english', 'Geometry', 'history']
