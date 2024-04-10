"use strict";

/**
 * solution 1
 * time: O(1)
 * space: O(1)
 * 
 * @param {string} first 
 * @param {string} last 
 */
function NameMe(first, last) {
    this.firstName = first;
    this.lastName = last;
    this.name = `${this.firstName} ${this.lastName}`;
}
