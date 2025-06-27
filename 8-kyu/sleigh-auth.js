"use strict";

function Sleigh() {
    this.name = "Santa Claus";
    this.password = "Ho Ho Ho!";
}

/**
 * solution 1
 * time: O(1)
 * space: O(1)
 * 
 * @param {string} name 
 * @param {string} password 
 * @returns {boolean}
 */
Sleigh.prototype.authenticate = function (name, password) {
    return name === this.name && password === this.password;
};
