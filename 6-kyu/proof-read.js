"use strict";

/**
 * solution 1
 * n = str length
 * m = sentence length
 * time: O(n * m)
 * space: O(n + m)
 * @param {string} str 
 * @returns {string}
 */
function proofread(str) {
    return str
            .toLowerCase()
            .replace(/ie/g, "ei")
            .split(". ")
            .map(function uppercaseSentenceFirstLetter(sentence) {
                return sentence[0].toUpperCase() + sentence.slice(1);
            })
            .join(". ");
}

console.log(proofread("THe neIghBour's ceiLing FEll on His Head. The WiEght of It crusHed him To thE gROuNd."));
// "The neighbour's ceiling fell on his head. The weight of it crushed him to the ground."
