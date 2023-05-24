"use strict";

function add(a, b) {
    return a + b;
}


/**
 * solution 1 -- closure
 * time: O(args)
 * space: O(args)
 * 
 * @param {function} func 
 * @param  {...any} funcArgs 
 * @returns {function}
 */
function makeLazy(func, ...funcArgs) {
    return function() {
        return func(...funcArgs);
    };
}

const lazy_value = makeLazy(add, 2, 3);
console.log( lazy_value() ); // 5
