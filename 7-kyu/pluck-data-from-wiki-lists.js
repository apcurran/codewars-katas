"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {object[]} data 
 * @param {string} property 
 * @returns {number[]|string[]}
 */
function pluck(data, property) {
    return data.map((obj) => obj[property]);
}

const gdpPerCapita = [{
    "name": "Luxembourg",
    "dollars": 111716,
}, {
    "name": "Norway",
    "dollars": 97013,
}, {
    "name": "Qatar",
    "dollars": 93965,
}];

console.log( pluck(gdpPerCapita, "name") ); // ["Luxembourg","Norway","Qatar"]
