"use strict";

/**
 * solution 1
 * time: O(1)
 * space: O(1)
 * 
 * @returns {function}
 */
function counter() {
    let counterAmt = 1;

    /**
     * @returns {number}
     */
    return () => counterAmt++;
}

const newCounter = counter();
console.log( newCounter() ); // 1
console.log( newCounter() ); // 2
