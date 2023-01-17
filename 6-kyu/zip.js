"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {any[]} keys 
 * @param {any[]} values 
 * @returns {object}
 */
function zipObject(keys, values) {
    let result = {};
    // check for empty keys and values arrays
    if (!keys && !values) return result;

    if (typeof keys[0] === "string" && typeof keys[1] === "string") {
        for (let i = 0; i < keys.length; i++) {
            const name = keys[i];
            const number = values ? values[i] : undefined;
            
            result[name] = number;
        }
    }
    
    // if keys is a 2D array of [key1, val1] and values is [key2, value2]...
    if (typeof keys[0] === "object") {
        // iterate keys
        for (let [name, number] of keys) {
            result[name] = number;
        }
    }

    return result;
}

console.log( zipObject(["fred", "barney"], [30, 40]) ); // { 'fred': 30, 'barney': 40 }
console.log( zipObject(["fred", "barney"]) ); // { fred: undefined, barney: undefined }
console.log( zipObject([["fred", 30], ["barney", 40]]) ); // { 'fred': 30, 'barney': 40 }
console.log( zipObject() ); // {}
