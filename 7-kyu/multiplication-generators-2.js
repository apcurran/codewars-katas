"use strict";

/**
 * solution 1 -- iteration
 * time: O(1)
 * space: O(1)
 *
 * @param {number} a
 * @returns {Generator} "a x b = c" format
 */
function* generator(a) {
    let b = 1;

    while (true) {
        const c = a * b;

        yield `${a} x ${b} = ${c}`;

        b++;
    }
}

const myGenerator = generator(1);
console.log(myGenerator.next().value);
console.log(myGenerator.next().value);
console.log(myGenerator.next().value);
console.log(myGenerator.next().value);
console.log(myGenerator.next().value);
