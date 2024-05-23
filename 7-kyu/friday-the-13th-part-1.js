"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {[string, number][]} counselors 
 * @param {number} jasonIntelligence 
 * @returns {string[]}
 */
function killcount(counselors, jasonIntelligence) {
    let survivors = [];

    for (let [counselor, counselorIntelligence] of counselors) {
        if (counselorIntelligence < jasonIntelligence) {
            survivors.push(counselor);
        }
    }

    return survivors;
}

console.log(killcount([["Mike", 7],["Alysa", 3]], 7)); // ["Alysa"]
