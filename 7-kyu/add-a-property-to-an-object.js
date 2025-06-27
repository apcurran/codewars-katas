"use strict";

/**
 * solution 1
 * time: O(1)
 * space: O(1)
 *
 * @param {object} obj
 * @param {string} prop
 * @param {string|number} value
 */
function addProperty(obj, prop, value) {
    if (Object.hasOwn(obj, prop)) {
        throw new Error("Property already exists.");
    }

    obj[prop] = value;
}

let obj = {};
addProperty(obj, "name", "Bob");
console.log(obj);
obj.name = "Smith";
console.log(obj);
