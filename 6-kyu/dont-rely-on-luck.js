"use strict";

const guess = 10;

/**
 * solution 1 -- re-write existing function to "control" randomness
 * time: O(1)
 * space: O(1)
 * 
 * @returns {number}
 */
Math.floor = function() {
    return guess; 
};
