"use strict";

/**
 * solution 1
 * 
 * @param  {...any} args
 * @returns {number[]}
 */
function flatten(...args) {
    return args.reduce((accumulator, currentValue) => {
        if (Array.isArray(currentValue)) {
            return accumulator.concat( flatten(...currentValue) );
        }

        return accumulator.concat(currentValue);
    }, []);
}

console.log( flatten(1, [2, 3], 4, 5, [6, [7]]) ); // [1, 2, 3, 4, 5, 6, 7]