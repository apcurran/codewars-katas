"use strict";

/**
 * @param {string} longDate - Full date ex.'Friday May 2, 7pm'
 * @returns {string} - Shortened date ex. 'Friday May 2'
 */
function shortenToDate(longDate) {
    return longDate.split(", ")[0];
}

console.log(shortenToDate("Friday May 2, 7pm"));
