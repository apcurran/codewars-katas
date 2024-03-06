"use strict";

// /**
//  * solution 1 -- regex search
//  * time: O(n)
//  * space: O(1)
//  * 
//  * @returns {boolean}
//  */
// String.prototype.whitespace = function () {
//     const onlyWhitespace = /^\s*$/;

//     return onlyWhitespace.test(this);
// };

/**
 * solution 2 -- trim() function
 * time: O(n)
 * space: O(n)
 * 
 * @returns {boolean}
 */
String.prototype.whitespace = function () {
    return this.trim() === "";
};
