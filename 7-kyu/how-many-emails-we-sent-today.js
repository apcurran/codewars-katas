"use strict";

/**
 * solution 1 -- formula
 * time: O(n) -- stringify percentage num
 * space: O(n) -- stringify percentage num
 * 
 * @param {number} sent 
 * @param {number} limit 
 * @returns {string} percentage
 */
function getPercentage(sent, limit = 1000) {
    if (sent === 0) return "No e-mails sent";

    if (sent >= limit) return "Daily limit is reached";

    const percentage = Math.floor((sent / limit) * 100);

    return `${percentage}%`;
}

console.log(getPercentage(101, 1000)); // "10%"
console.log(getPercentage(256, 500)); // "51%"
console.log(getPercentage(256, 300)); // "85%"
console.log(getPercentage(259)); // "25%"
console.log(getPercentage(0)); // "No e-mails sent"
console.log(getPercentage(1000, 1000)); // "Daily limit is reached"
