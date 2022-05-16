"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {object[]} list 
 * @returns {number}
 */
function countDevelopers(list) {
    return list
            .filter((dev) => dev.language === "JavaScript" && dev.continent === "Europe")
            .length;
}