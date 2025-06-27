"use strict";

/**
 * solution 1
 * k = keyFn
 * v = valueFn
 * time: O(n * k * v)
 * space: O(n)
 * 
 * @param {function} keyFn 
 * @param {function} valueFn 
 * @returns {object}
 */
Array.prototype.toDictionary = function (keyFn, valueFn) {
    let hashObj = {};
    // iterate list
    // for each value
    for (let value of this) {
        const hashedKey = keyFn(value);
        const hashedValue = valueFn ? valueFn(value) : value;
        hashObj[hashedKey] = hashedValue;
    }
    // return hashed object
    return hashObj;
};

const arr = [1, 2, 3, 4, 5];
console.log( arr.toDictionary((k)=>k, (v)=> true) ); // {1:true, 2:true, 3:true, 4:true, 5:true};
console.log( arr.toDictionary((k)=>k, (v)=> v*v) ); // {1:1, 2:4, 3:9, 4:16, 5:25};
console.log( arr.toDictionary((k)=>k) ); // {1:1, 2:2, 3:3, 4:4, 5:5}; // if no valueFn supplied, use the current item
