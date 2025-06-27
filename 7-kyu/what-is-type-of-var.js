"use strict";

/**
 * solution 1
 * time: O(1)
 * space: O(1)
 *
 * @param {any} value
 * @returns {string}
 */
function type(value) {
    if (Array.isArray(value)) {
        return "array";
    } else if (value instanceof Date) {
        return "date";
    } else if (value === null) {
        return "null";
    }

    return typeof value;
}
