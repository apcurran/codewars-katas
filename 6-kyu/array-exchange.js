"use strict";

/**
 * solution 1
 * time: O(b + (a * b))
 * space: O(1)
 * 
 * @param {any[]} a 
 * @param {any[]} b 
 * @returns {void}
 */
function exchangeWith(a, b) {
    const aLen = a.length;

    while (b.length !== 0) {
        // remove from b list and add to a list
        const bRemoved = b.pop();
        a.push(bRemoved);
    }

    // run through original a length to remove a elems and give to b list
    for (let i = 0; i < aLen; i++) {
        const aRemoved = a.shift();
        b.unshift(aRemoved);
    }
}

const a = ["1", "2", "3", "4", "5", "6", "7"];
const b = ["a", "b", "c"];
console.log(exchangeWith(a, b));
