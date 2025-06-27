"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {string[][]} colorsArr 
 * @returns {object[]}
 */
function colourAssociation(colorsArr) {
    return colorsArr.map((colorTuple) => {
        const [color, assoc] = colorTuple;

        return {
            [color]: assoc,
        };
    });
}

console.log( colourAssociation([["red", "energy"], ["yellow", "creativity"], ["brown", "friendly"], ["green", "growth"]]) );
// [{red: "energy"}, {yellow: "creativity"}, {brown: "friendly"}, {green: "growth"}]
