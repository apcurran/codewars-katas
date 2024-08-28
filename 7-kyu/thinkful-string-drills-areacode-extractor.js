"use strict";

/**
 * solution 1 -- regex
 * time: O(n)
 * space: O(n)
 * 
 * @param {string} text 
 * @returns {string}
 */
function areaCode(text) {
    // regex
    const areaCodeRegex = /\((\d+)\)/g;
    
    return [...text.matchAll(areaCodeRegex)][0][1];
}

console.log(areaCode("The supplier's phone number is (555) 867-5309")); // "555"
console.log(areaCode("Grae's cell number used to be (123) 456-7890")); // "123"
console.log(areaCode("The 102nd district court's fax line is (124) 816-3264")); // "124"
