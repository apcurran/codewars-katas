"use strict";

/**
 * Solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {string} fire 
 * @param {number} w 
 * @returns {number}
 */
function waterbombs(fire, w) {
    // split str on Y char
    const fireSectionsArr = fire.split("Y");
    let waterbombCount = 0;

    for (let fireSection of fireSectionsArr) {
        // divide each section by w param
        // round each division result up
        const quotient = Math.ceil(fireSection.length / w);
        // add div res to waterbomb counter
        waterbombCount += quotient;
    }

    return waterbombCount;
}

console.log( waterbombs("xxYxx", 3) ); // 2
console.log( waterbombs("xxYxx", 1) ); // 4
