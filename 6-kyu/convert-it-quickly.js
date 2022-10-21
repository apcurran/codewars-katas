"use strict";

/**
 * solution 1 -- short way to convert
 * time: O(n)
 * space: O(n)
 * 
 * @param {string} x 
 * @returns {number}
 */
const weirdHexToDec=(x)=>+`0x${x}`;

console.log( weirdHexToDec("FF") );
